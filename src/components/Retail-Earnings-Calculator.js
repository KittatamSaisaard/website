import React from 'react';
import '../css/retail-earnings-calculator-style.css';

// class Rates extends React.Component {
//   rates = {
//     ordinary_rate: 27.24,
//     mon_fri_sixpm_elevenpm_rate: 31.69,
//     saturday_rate: 32.69,
//     sunday_rate: 38.13
//   };

//   constructor(props) {
//     super(props);
//     const ordinary_rate_ls = localStorage.getItem('ordinary_rate');
//     const mon_fri_sixpm_elevenpm_ls = localStorage.getItem('mon_fri_sixpm_elevenpm');
//     const saturday_rate_ls = localStorage.getItem('saturday_rate');
//     const sunday_rate_ls = localStorage.getItem('sunday_rate');
//     this.rates.ordinary_rate = ordinary_rate_ls ? parseFloat(ordinary_rate_ls) : 27.24;
//     this.rates.mon_fri_sixpm_elevenpm_rate = mon_fri_sixpm_elevenpm_ls ? parseFloat(mon_fri_sixpm_elevenpm_ls) : 31.69;
//     this.rates.saturday_rate = saturday_rate_ls ? parseFloat(saturday_rate_ls) : 32.69;
//     this.rates.sunday_rate = sunday_rate_ls ? parseFloat(sunday_rate_ls) : 38.13;
//   }

//   handlePayRateChange = (time, e) => {
//     if(time === "ordinary_rate"){
//       this.rates.ordinary_rate = e.target.value;
//       localStorage.setItem('ordinary_rate', e.target.value);
//     } else if(time === "mon_fri_sixpm_elevenpm"){
//       this.rates.mon_fri_sixpm_elevenpm_rate = e.target.value;
//       localStorage.setItem("mon_fri_sixpm_elevenpm", e.target.value);
//     } else if(time === "saturday_rate"){
//       this.rates.saturday_rate = e.target.value;
//       localStorage.setItem("saturday_rate", e.target.value);
//     } else if(time === "sunday_rate"){
//       this.rates.sunday_rate = e.target.value;
//       localStorage.setItem("sunday_rate", e.target.value);
//     }
//     this.props.parentCallback(this.rates);
//   }

//   isNumberKey = (e) =>{
//     var charCode = (e.which) ? e.which : e.keyCode
//     const rate_value = e.target.value.toString()
//     if ((charCode > 31 && (charCode !== 46 && (charCode < 48 || charCode > 57))) || (charCode === 46 && rate_value.includes('.'))){
//       e.preventDefault();
//     }
//   }

//   render() {
//     return(
//       <></>
//     );
//   }
// }

// class Results extends React.Component {

//   calculateTax = (income) => {
//     let truncIncome = Math.floor(income);
//     if (truncIncome < 359){
//         return 0;
//     } else if (truncIncome < 438) {
//         return Math.round(0.1900 * (truncIncome+0.99) - 68.3462);
//     } else if (truncIncome < 548) {
//         return Math.round(0.2900 * (truncIncome+0.99) - 112.1942);
//     } else if (truncIncome < 721) {
//         return Math.round(0.2100 * (truncIncome+0.99) - 68.3465);
//     } else if (truncIncome < 865) {
//         return Math.round(0.2190 * (truncIncome+0.99) - 74.8369);
//     } else if (truncIncome < 1282) {
//         return Math.round(0.3477 * (truncIncome+0.99) - 186.2119);
//     } else if (truncIncome < 2307) {
//         return Math.round(0.3450 * (truncIncome+0.99) - 182.7504);
//     } else if (truncIncome < 3461) {
//         return Math.round(0.3900 * (truncIncome+0.99) - 286.5965);
//     } else {
//         return Math.round(0.4700 * (truncIncome+0.99) - 563.5196);
//     }
//   }

//   render() {
//     return(
//       <></>
//     );
//   }
// }

class Day extends React.Component {
  start_time = "17:00";
  finish_time = "20:00";
  ordinaryHours = 1;
  afterSixPMHours = 2;
  total_time = 0;
  day_toggle = true;
  total_pay = 0;

  days_list =
  {Weekday: 
    ["Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",],
  Weekend: 
    ["Saturday", 
    "Sunday"]
  };

  payAndHours = {
    total_hours: this.total_time,
    total_pay: this.total_pay,
    day: this.props.day,
    day_toggle: this.day_toggle
  };

  constructor(props) {
    super(props);
    const start_ls = localStorage.getItem(`start_${this.props.day}`);
    const finish_ls = localStorage.getItem(`finish_${this.props.day}`);
    const total_hours_ls = localStorage.getItem(`total_hours_${this.props.day}`);
    const day_checkbox_ls = localStorage.getItem(`day_checkbox_${this.props.day}`);
    this.start_time = start_ls ? start_ls : "17:00";
    this.finish_time = finish_ls ? finish_ls : "20:00";
    this.total_time = total_hours_ls ? parseFloat(total_hours_ls) : 3;
    this.day_toggle = day_checkbox_ls === "true" ? this.day_toggle = true : this.day_toggle = false;
    this.calcTimeDifference();
    this.callbackToParent();
  }

  calculatePayAndHours = () => {
    var times = this.calcTime(this.start_time, this.finish_time, false);
    var outsideSixAndEleven = times.outsideSixAndEleven;
    var betweenSixAndEleven = times.betweenSixAndEleven;
    var totalTime = times.timeDiff;
    this.ordinaryHours = outsideSixAndEleven;
    this.afterSixPMHours = betweenSixAndEleven;
    this.total_time = totalTime;
    if (this.props.day === "Saturday") {
      this.total_pay = (this.total_time * this.props.rate.saturday_rate).toFixed(2);
    } else if(this.props.day === "Sunday") {
      this.total_pay = (this.total_time * this.props.rate.sunday_rate).toFixed(2);
    } else {
      this.total_pay = ((this.ordinaryHours * this.props.rate.ordinary_rate) + (this.afterSixPMHours * this.props.rate.mon_fri_sixpm_elevenpm_rate)).toFixed(2);
    }
    this.forceUpdate();
  }

  calcTimeDifference = ()  => {
    let start = this.start_time
    let end = this.finish_time;
    start = start.split(":");
    end = end.split(":");
    const startDate = new Date(0, 0, 0, start[0], start[1], 0);
    const endDate = new Date(0, 0, 0, end[0], end[1], 0);
    let diff = endDate.getTime() - startDate.getTime();
    let hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    let minutes = Math.floor(diff / 1000 / 60);
    minutes = (minutes/60).toFixed(2);
    minutes = minutes.split(".");
    minutes = minutes[1];

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0) {
      hours = hours + 24;
    }

    // return (hours <= 9 ? "0" : "") + hours + "." + (minutes <= 9 ? "0" : "") + minutes;
    this.total_time = parseFloat(hours + (minutes !== 0 ? "." + minutes : ""));
    localStorage.setItem(`total_hours_${this.props.day}`, this.total_time);
    this.calculatePayAndHours();
  }

  calcTimeDifferenceReturn = (start, end)  => {
    start = start.split(":");
    end = end.split(":");
    const startDate = new Date(0, 0, 0, start[0], start[1], 0);
    const endDate = new Date(0, 0, 0, end[0], end[1], 0);
    let diff = endDate.getTime() - startDate.getTime();
    let hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    let minutes = Math.floor(diff / 1000 / 60);
    minutes = (minutes/60).toFixed(2);
    minutes = minutes.split(".");
    minutes = minutes[1];

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0) {
      hours = hours + 24;
    }

    // return (hours <= 9 ? "0" : "") + hours + "." + (minutes <= 9 ? "0" : "") + minutes;
    return parseFloat(hours + (minutes !== 0 ? "." + minutes : ""));
  }

  callbackToParent = () => {
    this.payAndHours.total_hours = this.total_time;
    this.payAndHours.total_pay = this.total_pay
    this.payAndHours.day_toggle = this.day_toggle
    this.props.parentCallback(this.payAndHours);
  }

  handleTimeChange = (time, e) => {
    if(time === "start"){
      this.start_time = e.target.value
      localStorage.setItem(`start_${this.props.day}`, e.target.value);
    } else if(time === "finish"){
      this.finish_time = e.target.value;
      localStorage.setItem(`finish_${this.props.day}`, e.target.value);
    }
    this.calcTimeDifference();
    this.callbackToParent();
    this.forceUpdate();
  }

  calcTime = (inTime, outTime, breakTime) => {
    let inTimeSplit = inTime.split(":");
    let outTimeSplit = outTime.split(":");
    let inDate = new Date(0, 0, 0, inTimeSplit[0], inTimeSplit[1], 0);
    let outDate = new Date(0, 0, 0, outTimeSplit[0], outTimeSplit[1], 0);
    let sixPM = new Date(0, 0, 0, 18, 0, 0);
    let elevenPM = new Date(0, 0, 0, 23, 0, 0);
  
    //Calcuate the total shift time as a decimal in terms of hours
    let timeDiff = this.total_time;
    let outsideSixAndEleven = 0;
    let betweenSixAndEleven = 0;
      
    //Start and finish before 6pm OR Start and finish after 11pm
    if((inDate < sixPM && outDate <= sixPM) || (inDate >= elevenPM && outDate > elevenPM)) {
        outsideSixAndEleven = parseFloat(this.total_time);
        betweenSixAndEleven = 0
    } else
    //Start and finish between 6pm and 11pm
    if(inDate > sixPM && outDate < elevenPM) {
        outsideSixAndEleven = 0
        betweenSixAndEleven = parseFloat(this.total_time);
    } else
    //Start before 6pm and finish before 11pm
    if(inDate <= sixPM && outDate < elevenPM) {
        outsideSixAndEleven = parseFloat(this.calcTimeDifferenceReturn(inTime, "18:00"));
        betweenSixAndEleven = parseFloat(this.calcTimeDifferenceReturn("18:00", outTime));
    } else
    //Start after 6pm and finish after 11pm
    if(inDate >= sixPM && outDate >= elevenPM) {
        outsideSixAndEleven = parseFloat(this.calcTimeDifferenceReturn("23:00", outTime));
        betweenSixAndEleven = parseFloat(this.calcTimeDifferenceReturn(inTime, "23:00"));
    }
    //Start before 6pm and finish after 11pm
    if(inDate <= sixPM && outDate >= elevenPM) {
        outsideSixAndEleven = parseFloat(this.calcTimeDifferenceReturn(inTime, "18:00")) + parseFloat(this.calcTimeDifferenceReturn("23:00", outTime));
        betweenSixAndEleven = parseFloat(this.calcTimeDifferenceReturn("18:00", "23:00"));
    }

    //Start before 6pm and finish after 11pm if the in time is greater than the out time
    if((inDate > outDate) && (inDate <= sixPM && outDate <= elevenPM)){
      betweenSixAndEleven = parseFloat(this.calcTimeDifferenceReturn("18:00", "23:00"));
      outsideSixAndEleven = outsideSixAndEleven - betweenSixAndEleven;
    }
  
    //If worked over 5 hours, then subtract 30 minutes from the total shift time
    var timeDiffFloat = parseFloat(timeDiff);
    if (timeDiffFloat > 5.0 && breakTime === true) {
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

  componentDidUpdate(prevProps) {
    if (this.props.rate.ordinary_rate !== prevProps.rate.ordinary_rate) {
      this.callbackToParent();
    }
  }

  render() {
    return(
      this.days_list.Weekday.indexOf(`${this.props.day}`) > -1
      ?
      <div className="day">
        <div>
          <div className="flexRow flexSpaceBetween">
            <div className="dayTopRow alignCentre">
              <input className="dayCheckbox" type="checkbox" onClick={() => {this.day_toggle = !this.day_toggle; this.callbackToParent(); this.forceUpdate();}} onChange={() => {this.calculatePayAndHours(); localStorage.setItem(`day_checkbox_${this.props.day}`, this.day_toggle)}} defaultChecked={this.day_toggle}/>
              <span className="dayName titles">{this.props.day}</span>		
            </div>
            {/* <div className={`break dayTopRow alignCentre ${this.day_toggle ? 'show' : 'hide'}`}> */}
              {/* <input className="breakCheckbox" type="checkbox" onClick={null} onChange={null/*"calculatePayAndHours(); setCookie('breakCheckbox0', this.checked, 30);"* defaultChecked={true}/> */}
              {/* <span className="breakName titles">Include Break</span>						 */}
            {/* </div> */}
          </div>
          <div className={`times ${this.day_toggle ? 'show' : 'hide'}`}>
          <div className="flexRow titles">
            <label className="titles">In:
            <input className="titles inTimes" type="time" value={this.start_time} onChange={(e) => {this.handleTimeChange("start", e)}}/>
            </label>
          </div>
          <div className="flexRow titles">
            <label className="titles">Out:
            <input className="titles outTimes" type="time" value={this.finish_time} onChange={(e) => {this.handleTimeChange("finish", e)}}/>
            </label>
          </div>
          </div>
        </div>
        <span className={`dayOff titles ${this.day_toggle ? 'hide' : 'show'}`}>Day Off</span>
        <div className={`pay ${this.day_toggle ? 'show' : 'hide'}`}>
          <div className="flexColumn alignCentre">
            <span className="boldFont">Ordinary:</span>
            <span className="ordinaryPayMonToFri">{'$' + (this.ordinaryHours * this.props.rate.ordinary_rate).toFixed(2)}</span>
            <span className="ordinaryHours">{parseFloat(this.ordinaryHours.toFixed(2)) + (this.ordinaryHours <= 1 ? " hour" : " hours")}</span>
          </div>
          <span className="equationSymbolsDays">+</span>
          <div className="flexColumn alignCentre">
            <span className="boldFont">After 6pm:</span>
            <span className="afterSixPMPay">{'$' + (this.afterSixPMHours * this.props.rate.mon_fri_sixpm_elevenpm_rate).toFixed(2)}</span>
            <span className="afterSixPMHours">{parseFloat(this.afterSixPMHours.toFixed(2)) + (this.afterSixPMHours <= 1 ? " hour" : " hours")}</span>
          </div>
          <span className="equationSymbolsDays">=</span>	
          <div className="flexColumn alignCentre">
            <span className="boldFont">Total:</span>
            <span className="totalPay">{'$' + parseFloat(((this.ordinaryHours * this.props.rate.ordinary_rate) + (this.afterSixPMHours * this.props.rate.mon_fri_sixpm_elevenpm_rate)).toFixed(2))}</span>
            <span className="totalHours">{parseFloat(this.total_time.toFixed(2)) + (this.total_time <= 1 ? " hour" : " hours")}</span>
          </div>
        </div>
      </div>
      :
      <div className="day">
        <div>
          <div className="flexRow flexSpaceBetween">
            <div className="dayTopRow alignCentre">
              <input className="dayCheckbox" type="checkbox" onClick={() => {this.day_toggle = !this.day_toggle; this.callbackToParent(); this.forceUpdate();}} onChange={/*calculatePayAndHours()*/ localStorage.setItem(`day_checkbox_${this.props.day}`, this.day_toggle)} defaultChecked={this.day_toggle}/>
              <span className="dayName titles">{this.props.day}</span>		
            </div>
            {/* <div className={`break dayTopRow alignCentre ${this.day_toggle ? 'show' : 'hide'}`}> */}
              {/* <input className="breakCheckbox" type="checkbox" onClick={null} onChange={null/*"calculatePayAndHours(); setCookie('breakCheckbox5', this.checked, 30);" defaultChecked={true}/> */}
              {/* <span className="breakName titles">Include Break</span>						 */}
            {/* </div> */}
          </div>

				<div className={`times ${this.day_toggle ? 'show' : 'hide'}`}>
					<div className="flexRow titles">
						<label className="titles">In:
						  <input className="titles inTimes" type="time" value={this.start_time} onChange={(e) => this.handleTimeChange("start", e)}/>
						</label>
					</div>

					<div className="flexRow titles">
						<label className="titles">Out:
						  <input className="titles outTimes" type="time" value={this.finish_time} onChange={(e) => this.handleTimeChange("finish", e)}/>
            </label>
					</div>
				</div>
        </div>
        <span className={`dayOff titles ${this.day_toggle ? 'hide' : 'show'}`}>Day Off</span>
        <div className={`pay ${this.day_toggle ? 'show' : 'hide'}`}>
          <div className="flexColumn alignCentre">
            <span className="boldFont">Total:</span>
            <span className="totalPay">{this.props.day === "Saturday" ? '$' + (this.total_time * this.props.rate.saturday_rate).toFixed(2) : '$' + (this.total_time * this.props.rate.sunday_rate).toFixed(2)}</span>
            <span className="totalHours">{parseFloat(this.total_time.toFixed(2)) + (this.total_time <= 1 ? " hour" : " hours")}</span>
          </div>
        </div>
		  </div>
    );
  }
}

export default class REC extends React.Component {
  rates = {
    ordinary_rate: 27.24,
    mon_fri_sixpm_elevenpm_rate: 31.69,
    saturday_rate: 32.69,
    sunday_rate: 38.13
  }

  constructor(props) {
    super(props);
    const ordinary_rate_ls = localStorage.getItem('ordinary_rate');
    const mon_fri_sixpm_elevenpm_ls = localStorage.getItem('mon_fri_sixpm_elevenpm');
    const saturday_rate_ls = localStorage.getItem('saturday_rate');
    const sunday_rate_ls = localStorage.getItem('sunday_rate');
    this.rates.ordinary_rate = ordinary_rate_ls ? parseFloat(ordinary_rate_ls) : 27.24;
    this.rates.mon_fri_sixpm_elevenpm_rate = mon_fri_sixpm_elevenpm_ls ? parseFloat(mon_fri_sixpm_elevenpm_ls) : 31.69;
    this.rates.saturday_rate = saturday_rate_ls ? parseFloat(saturday_rate_ls) : 32.69;
    this.rates.sunday_rate = sunday_rate_ls ? parseFloat(sunday_rate_ls) : 38.13;
  }

  // handleCallbackRates = (childData) =>{
  //   this.rates.ordinary_rate = childData.ordinary_rate;
  //   this.rates.mon_fri_sixpm_elevenpm_rate = childData.mon_fri_sixpm_elevenpm_rate;
  //   this.rates.saturday_rate= childData.saturday_rate;
  //   this.rates.sunday_rate = childData.sunday_rate;

  //   console.log(this.hoursAndPay.Monday);

  //   this.forceUpdate();
  // }

  hoursAndPay = {
    Monday:
    {
      hours: 0,
      pay: 0,
      day_toggle: true
    },
    Tuesday:
    {
      hours: 0,
      pay: 0,
      day_toggle: true
    },
    Wednesday:
    {
      hours: 0,
      pay: 0,
      day_toggle: true
    },
    Thursday:
    {
      hours: 0,
      pay: 0,
      day_toggle: true
    },
    Friday:
    {
      hours: 0,
      pay: 0,
      day_toggle: true
    },
    Saturday:
    {
      hours: 0,
      pay: 0,
      day_toggle: true
    },
    Sunday:
    {
      hours: 0,
      pay: 0,
      day_toggle: true
    },
    total_week_hours: 0,
    total_week_pay: 0
  };

  days_list =
    ["Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday", 
    "Sunday"];

  handleCallbackHours = (childData) =>{
    this.hoursAndPay[childData.day].hours = childData.total_hours;
    this.hoursAndPay[childData.day].pay = childData.total_pay;
    this.hoursAndPay[childData.day].day_toggle = childData.day_toggle;
    this.hoursAndPay.total_week_hours = 0;
    this.hoursAndPay.total_week_pay = 0;
    for (let day = 0; day < 7; day++) {
      if(this.hoursAndPay[this.days_list[day]].day_toggle === true) {
        this.hoursAndPay.total_week_hours += this.hoursAndPay[this.days_list[day]].hours;
        this.hoursAndPay.total_week_pay += parseFloat(this.hoursAndPay[this.days_list[day]].pay);
      }
    }
    this.hoursAndPay.total_week_hours = parseFloat(this.hoursAndPay.total_week_hours.toFixed(2));
    this.hoursAndPay.total_week_pay = parseFloat(this.hoursAndPay.total_week_pay.toFixed(2));
    this.forceUpdate();
  }

  handlePayRateChange = (time, e) => {
    if(time === "ordinary_rate"){
      this.rates.ordinary_rate = e.target.value;
      localStorage.setItem('ordinary_rate', e.target.value);
    } else if(time === "mon_fri_sixpm_elevenpm"){
      this.rates.mon_fri_sixpm_elevenpm_rate = e.target.value;
      localStorage.setItem("mon_fri_sixpm_elevenpm", e.target.value);
    } else if(time === "saturday_rate"){
      this.rates.saturday_rate = e.target.value;
      localStorage.setItem("saturday_rate", e.target.value);
    } else if(time === "sunday_rate"){
      this.rates.sunday_rate = e.target.value;
      localStorage.setItem("sunday_rate", e.target.value);
    }
    this.forceUpdate();
  }

  calculateTax = (income) => {
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

  isNumberKey = (e) =>{
    var charCode = (e.which) ? e.which : e.keyCode
    const rate_value = e.target.value.toString()
    if ((charCode > 31 && (charCode !== 46 && (charCode < 48 || charCode > 57))) || (charCode === 46 && rate_value.includes('.'))){
      e.preventDefault();
    }
  }

  render () {
    return (
      <div className="App-body" /*onload="init()"*/>
        <div className="border">
          <div className="flexRow flexCentre displayBox">
            <div className="flexColumn alignCentre">
              <span className="boldFont" style={{color:"chartreuse"}}>Gross Earnings</span>
              <span id="grossEarnings">{'$' + this.hoursAndPay.total_week_pay}</span>
            </div>
            <span className="equationSymbolsResults">-</span>
            <div className="flexColumn alignCentre">
              <span className="boldFont" style={{color:"red"}}>Tax</span>
              <span id="tax">{'$' + this.calculateTax(this.hoursAndPay.total_week_pay)}</span>
            </div>
            <span className="equationSymbolsResults">=</span>
            <div className="flexColumn alignCentre">
              <span className="boldFont" style={{color:"blue"}}>Net Earnings</span>
              <span id="netEarnings">{'$' + parseFloat((this.hoursAndPay.total_week_pay - this.calculateTax(this.hoursAndPay.total_week_pay)).toFixed(2))}</span>
          </div>
        </div>
        <div className="flexRow flexCentre displayBox">
          <div className="flexColumn alignCentre">
            <span className="boldFont" style={{color:"darkviolet"}}>Total Hours Worked:</span>
            <span id="totalHoursWorked">{this.hoursAndPay.total_week_hours + (this.hoursAndPay.total_week_hours <= 1 ? " hour" : " hours")}</span>
          </div>
        </div>
        </div>
        <div className="border">
          <div className="payRates">
            <span className="flexRow flexCentre titles boldFont">Rates</span>
              <div className="flexRow flexCentre">
                <div>
                  <div className="flexColumn alignCentre titles">
                    <label className="ratesTitle">Ordinary pay</label>
                    <input id="ordinaryPay" className="ratesInput" type="number" min="0" value={this.rates.ordinary_rate} onChange={(e) => this.handlePayRateChange("ordinary_rate", e)} onKeyPress={(e) => this.isNumberKey(e)}/>
                  </div>
                  <div className="flexColumn alignCentre titles">
                    <label className="ratesTitle">Mon-Fri 6pm-11pm</label>
                    <input id="mon_fri_sixPM_to_elevenPM" className="ratesInput" type="number" min="0" value={this.rates.mon_fri_sixpm_elevenpm_rate} onChange={(e) => this.handlePayRateChange("mon_fri_sixpm_elevenpm", e)} onKeyPress={(e) => this.isNumberKey(e)}/>
                  </div>	
                </div>
                <div>
                  <div className="flexColumn alignCentre titles">
                    <label className="ratesTitle">Saturday</label>
                    <input id="saturday" className="ratesInput" type="number" min="0" value={this.rates.saturday_rate} onChange={(e) => this.handlePayRateChange("saturday_rate", e)} onKeyPress={(e) => this.isNumberKey(e)}/>
                  </div>
                  <div className="flexColumn alignCentre titles">
                    <label className="ratesTitle">Sunday</label>
                    <input id="sunday" className="ratesInput" type="number" min="0" value={this.rates.sunday_rate} onChange={(e) => this.handlePayRateChange("sunday_rate", e)} onKeyPress={(e) => this.isNumberKey(e)}/>
                  </div>		
              </div>
            </div>
          </div> 
        </div>
        <Day parentCallback = {this.handleCallbackHours} day={"Monday"} rate={{ordinary_rate: this.rates.ordinary_rate, mon_fri_sixpm_elevenpm_rate: this.rates.mon_fri_sixpm_elevenpm_rate}}/>
        <Day parentCallback = {this.handleCallbackHours} day={"Tuesday"} rate={{ordinary_rate: this.rates.ordinary_rate, mon_fri_sixpm_elevenpm_rate: this.rates.mon_fri_sixpm_elevenpm_rate}}/>
        <Day parentCallback = {this.handleCallbackHours} day={"Wednesday"} rate={{ordinary_rate: this.rates.ordinary_rate, mon_fri_sixpm_elevenpm_rate: this.rates.mon_fri_sixpm_elevenpm_rate}}/>
        <Day parentCallback = {this.handleCallbackHours} day={"Thursday"} rate={{ordinary_rate: this.rates.ordinary_rate, mon_fri_sixpm_elevenpm_rate: this.rates.mon_fri_sixpm_elevenpm_rate}}/>
        <Day parentCallback = {this.handleCallbackHours} day={"Friday"} rate={{ordinary_rate: this.rates.ordinary_rate, mon_fri_sixpm_elevenpm_rate: this.rates.mon_fri_sixpm_elevenpm_rate}}/>
        <Day parentCallback = {this.handleCallbackHours} day={"Saturday"} rate={{saturday_rate: this.rates.saturday_rate}}/>
        <Day parentCallback = {this.handleCallbackHours} day={"Sunday"} rate={{sunday_rate: this.rates.sunday_rate}}/>
      </div>
    );
  }
}