function dayToggle(button, index){
	if (button.checked) {
		document.getElementsByClassName("times")[index].style.display = "flex";
		document.getElementsByClassName("pay")[index].style.display = "flex";
		document.getElementsByClassName("break")[index].style.display = "flex";
		document.getElementsByClassName("dayOff")[index].style.display = "none";
	} else {
		document.getElementsByClassName("times")[index].style.display = "none";
		document.getElementsByClassName("pay")[index].style.display = "none";
		document.getElementsByClassName("break")[index].style.display = "none";
		document.getElementsByClassName("dayOff")[index].style.display = "flex";
	}
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}

function validRate(input){
	if (input.value == "") {
		input.value = 0;
	}
	calculatePayAndHours();
}

//const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function timeDifference(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    minutes = (minutes/60).toFixed(2);
    minutes = minutes.split(".");
    minutes = minutes[1];

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;

    // return (hours <= 9 ? "0" : "") + hours + "." + (minutes <= 9 ? "0" : "") + minutes;
    return hours + (minutes != 0 ? "." + minutes : "") + (hours <= 1 && minutes == 0? " hour" : " hours");
}

function calculateTax(income) {
    let truncIncome = Math.floor(income);
    if (truncIncome < 359){
        return 0;
    } else if (truncIncome < 438) {
        return Math.round(0.1900 * (truncIncome+0.99) - 68.3462);
    } else if (truncIncome < 548) {
        return Math.round(0.2900 * (truncIncome+0.99) - 112.1942);
    } else if (truncIncome < 721) {
        return Math.round(0.2100 * (truncIncome+0.99) - 68.3465);
    } else if (truncIncome < 865) {
        return Math.round(0.2190 * (truncIncome+0.99) - 74.8369);
    } else if (truncIncome < 1282) {
        return Math.round(0.3477 * (truncIncome+0.99) - 186.2119);
    } else if (truncIncome < 2307) {
        return Math.round(0.3450 * (truncIncome+0.99) - 182.7504);
    } else if (truncIncome < 3461) {
        return Math.round(0.3900 * (truncIncome+0.99) - 286.5965);
    } else {
        return Math.round(0.4700 * (truncIncome+0.99) - 563.5196);
    }
}

function calculateTime(inTime, outTime, breakTime) {
	inTimeSplit = inTime.split(":");
	outTimeSplit = outTime.split(":");
    let inDate = new Date(0, 0, 0, inTimeSplit[0], inTimeSplit[1], 0);
    let outDate = new Date(0, 0, 0, outTimeSplit[0], outTimeSplit[1], 0);
	let sixPM = new Date(0, 0, 0, 18, 0, 0);
    let elevenPM = new Date(0, 0, 0, 23, 0, 0);

    //Calcuate the total shift time as a decimal in terms of hours
    let timeDiff = timeDifference(inTime, outTime);
    let outsideSixAndEleven = 0;
    let betweenSixAndEleven = 0;
    
    //Start and finish before 6pm OR Start and finish after 11pm
    if((inDate < sixPM && outDate <= sixPM) || (inDate >= elevenPM && outDate > elevenPM)) {
        outsideSixAndEleven = parseFloat(timeDifference(inTime, outTime));
        betweenSixAndEleven = 0
    } else
    //Start and finish between 6pm and 11pm
    if(inDate > sixPM && outDate < elevenPM) {
        outsideSixAndEleven = 0
        betweenSixAndEleven = parseFloat(timeDifference(inTime, outTime));
    } else
    //Start before 6pm and finish before 11pm
    if(inDate <= sixPM && outDate < elevenPM) {
        outsideSixAndEleven = parseFloat(timeDifference(inTime, "18:00"));
        betweenSixAndEleven = parseFloat(timeDifference("18:00", outTime));
    } else
    //Start after 6pm and finish after 11pm
    if(inDate >= sixPM && outDate >= elevenPM) {
        outsideSixAndEleven = parseFloat(timeDifference("23:00", outTime));
        betweenSixAndEleven = parseFloat(timeDifference(inTime, "23:00"));
    }
    //Start before 6pm and finish after 11pm
    if(inDate <= sixPM && outDate >= elevenPM) {
        outsideSixAndEleven = parseFloat(timeDifference(inTime, "18:00")) + parseFloat(timeDifference("23:00", outTime));
        betweenSixAndEleven = parseFloat(timeDifference("18:00", "23:00"));
    }

    //If worked over 5 hours, then subtract 30 minutes from the total shift time
    var timeDiffFloat = parseFloat(timeDiff);
    if (timeDiffFloat > 5.0 && breakTime == true) {
        timeDiffFloat  = timeDiffFloat  - 0.5
        if(betweenSixAndEleven >= 0.5){
            betweenSixAndEleven = betweenSixAndEleven - 0.5
        } else if (betweenSixAndEleven > 0) {
            outsideSixAndEleven = outsideSixAndEleven - 0.5 + betweenSixAndEleven
            betweenSixAndEleven = betweenSixAndEleven - betweenSixAndEleven
        } else {
            outsideSixAndEleven = outsideSixAndEleven - 0.5
        }
    }


    return {"outsideSixAndEleven": outsideSixAndEleven, "betweenSixAndEleven": betweenSixAndEleven, "timeDiff": outsideSixAndEleven+betweenSixAndEleven};
}

function calculatePayAndHours() {
	for (var i = 0; i < 5; i++) {
		var inTime = document.getElementsByClassName("inTimes")[i].value;
		var outTime = document.getElementsByClassName("outTimes")[i].value;
		var breakTime = document.getElementsByClassName("breakCheckbox")[i].checked;
		var times = calculateTime(inTime, outTime, breakTime);
		var outsideSixAndEleven = times.outsideSixAndEleven;
		var betweenSixAndEleven = times.betweenSixAndEleven;
		var totalTime = times.timeDiff;
		document.getElementsByClassName("ordinaryHours")[i].innerHTML = outsideSixAndEleven + (outsideSixAndEleven <= 1 ? " hour" : " hours");
		document.getElementsByClassName("afterSixPMHours")[i].innerHTML = betweenSixAndEleven + (betweenSixAndEleven <= 1 ? " hour" : " hours");
		document.getElementsByClassName("totalHours")[i].innerHTML = totalTime + (totalTime <= 1 ? " hour" : " hours");

		var ordinaryPay = outsideSixAndEleven * parseFloat(document.getElementById("ordinaryPay").value);
		var afterSixPMPay = betweenSixAndEleven * parseFloat(document.getElementById("mon_fri_sixPM_to_elevenPM").value);
		document.getElementsByClassName("ordinaryPayMonToFri")[i].innerHTML = "$" + ordinaryPay.toFixed(2).toString();
		document.getElementsByClassName("afterSixPMPay")[i].innerHTML = "$" + afterSixPMPay.toFixed(2).toString();
		document.getElementsByClassName("totalPay")[i].innerHTML = "$" + (ordinaryPay + afterSixPMPay).toFixed(2).toString();
	}

	for (var i = 5; i < 7; i++) {
		var inTime = document.getElementsByClassName("inTimes")[i].value;
		var outTime = document.getElementsByClassName("outTimes")[i].value;
		var breakTime = document.getElementsByClassName("breakCheckbox")[i].checked;
		var totalTime = calculateTime(inTime, outTime, breakTime).timeDiff;
		//var totalTime = timeDifference(inTime, outTime);
		document.getElementsByClassName("totalHours")[i].innerHTML = totalTime + (totalTime <= 1 ? " hour" : " hours");
		var payRate = 0;
		//Saturday
		if (i == 5) {
			payRate = document.getElementById("saturday").value;
		} else 
		//Sunday
		if (i == 6) {
			payRate = document.getElementById("sunday").value;
		}
		var totalPay = payRate * parseFloat(totalTime);
		document.getElementsByClassName("totalPay")[i].innerHTML = "$" + totalPay.toFixed(2).toString();
	}

	var totalHoursWorked = 0;
	var grossEarnings = 0;
	for (var i = 0; i < 7; i++) {
		if (document.getElementsByClassName("dayCheckbox")[i].checked) {
			grossEarnings += parseFloat(document.getElementsByClassName("totalPay")[i].innerHTML.substring(1));
			totalHoursWorked += parseFloat(document.getElementsByClassName("totalHours")[i].innerHTML);
		} else {
			continue;
		}	
	}
	document.getElementById("grossEarnings").innerHTML = "$" + parseFloat(grossEarnings.toFixed(2));
	document.getElementById("tax").innerHTML = "$" + parseFloat(calculateTax(grossEarnings).toFixed(2));
	document.getElementById("totalHoursWorked").innerHTML = parseFloat(totalHoursWorked.toFixed(2)) + (totalHoursWorked <= 1 ? " hour" : " hours");
	document.getElementById("netEarnings").innerHTML = "$" + (parseFloat(document.getElementById("grossEarnings").innerHTML.substring(1)) - parseFloat(document.getElementById("tax").innerHTML.substring(1))).toFixed(2);
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var cookiesList = ["ordinaryPay", "mon_fri_sixPM_to_elevenPM", "saturday", "sunday"];

function initCookies(){
	for (var i = 0; i < cookiesList.length; i++) {
		let ordinaryPay = getCookie(cookiesList[i]);
		if (ordinaryPay != "") {
				document.getElementById(cookiesList[i]).value = ordinaryPay;
			} else {
				document.getElementById(cookiesList[i]).value = 0;
				setCookie(cookiesList[i], 0, 30);
		}	
	}

	//Monday - Friday
	for (var i = 0; i < 5; i++) {
		let inTime = getCookie("inTimes"+i);
		if (inTime != "") {
			document.getElementsByClassName("inTimes")[i].value = inTime;
		} else {
			document.getElementsByClassName("inTimes")[i].value = "17:00";
			setCookie("inTimes"+i, "17:00", 30);
		}

		let outTime = getCookie("outTimes"+i);
		if (inTime != "") {
			document.getElementsByClassName("outTimes")[i].value = outTime;
		} else {
			document.getElementsByClassName("outTimes")[i].value = "20:00";
			setCookie("outTimes"+i, "20:00", 30);
		}	
	}

	//Saturday & Sunday
	for (var i = 5; i < 7; i++) {
		let inTime = getCookie("inTimes"+i);
		if (inTime != "") {
			document.getElementsByClassName("inTimes")[i].value = inTime;
		} else {
			document.getElementsByClassName("inTimes")[i].value = "09:00";
			setCookie("inTimes"+i, "09:00", 30);
		}

		let outTime = getCookie("outTimes"+i);
		if (inTime != "") {
			document.getElementsByClassName("outTimes")[i].value = outTime;
		} else {
			document.getElementsByClassName("outTimes")[i].value = "17:00";
			setCookie("outTimes"+i, "17:00", 30);
		}	
	}

	//Checkboxes
	for (var i = 0; i < 7; i++) {
		let enabled = getCookie("dayCheckbox"+i);
		if (enabled != "") {
			if ((enabled === "false" && document.getElementsByClassName("dayCheckbox")[i].checked == true) || (enabled === "true" && document.getElementsByClassName("dayCheckbox")[i].checked == false)) {
				document.getElementsByClassName("dayCheckbox")[i].click();
			}
		} else {
			document.getElementsByClassName("dayCheckbox")[i].checked = true;
			setCookie("dayCheckbox"+i, true, 30);
		}
	}

	//Break Checkboxes
	for (var i = 0; i < 7; i++) {
		let enabled = getCookie("breakCheckbox"+i);
		if (enabled != "") {
			if ((enabled === "false" && document.getElementsByClassName("breakCheckbox")[i].checked == true) || (enabled === "true" && document.getElementsByClassName("breakCheckbox")[i].checked == false)) {
				document.getElementsByClassName("breakCheckbox")[i].click();
			}
		} else {
			document.getElementsByClassName("breakCheckbox")[i].checked = true;
			setCookie("breakCheckbox"+i, true, 30);
		}
	}
}

function init() {
	initCookies();
	calculatePayAndHours();
}