import React from 'react';
import '../css/retail-earnings-calculator-style.css';
import '../javascript/retail-earnings-calculator-script';

class Rates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {
        ordinary_rate: 27.24,
        mon_fri_sixpm_elevenpm_rate: 31.69,
        saturday_rate: 32.69,
        sunday_rate: 38.13
      }
    };
  }

  handlePayRateChange = (time, e) => {
    if(time === "ordinary_rate"){
      this.setState({
        rates:{ordinary_rate: e.target.value}
      })
    } else if(time === "mon_fri_sixpm_elevenpm"){
      this.setState({
        rates:{mon_fri_sixpm_elevenpm_rate: e.target.value}
      })
    } else if(time === "saturday_rate"){
      this.setState({
        rates:{saturday_rate: e.target.value}
      })
    } else if(time === "sunday_rate"){
      this.setState({
        rates:{sunday_rate: e.target.value}
      })
    }
  }

  isNumberKey = (e) =>{
    var charCode = (e.which) ? e.which : e.keyCode
    const rate_value = e.target.value.toString()
    if ((charCode > 31 && (charCode !== 46 && (charCode < 48 || charCode > 57))) || (charCode === 46 && rate_value.includes('.'))){
      e.preventDefault();
    }
  }

  render() {
    return(
      <div class="border">
        <div class="payRates">
          <span class="flexRow flexCentre titles boldFont">Rates</span>
            <div class="flexRow flexCentre">
              <div>
                <div class="flexColumn alignCentre titles">
                  <label class="ratesTitle">Ordinary pay</label>
                  <input id="ordinaryPay" class="ratesInput" type="number" value={this.state.rates.ordinary_rate} onChange={(e) => this.handlePayRateChange("ordinary_rate", e)} onKeyPress={(e) => this.isNumberKey(e)}/>
                </div>
                <div class="flexColumn alignCentre titles">
                  <label class="ratesTitle">Mon-Fri 6pm-11pm</label>
                  <input id="mon_fri_sixPM_to_elevenPM" class="ratesInput" type="number" value={this.state.rates.mon_fri_sixpm_elevenpm_rate} onChange={(e) => this.handlePayRateChange("mon_fri_sixpm_elevenpm", e)} onKeyPress={(e) => this.isNumberKey(e)}/>
                </div>	
              </div>
              <div>
                <div class="flexColumn alignCentre titles">
                  <label class="ratesTitle">Saturday</label>
                  <input id="saturday" class="ratesInput" type="number" value={this.state.rates.saturday_rate} onChange={(e) => this.handlePayRateChange("saturday_rate", e)} onKeyPress={(e) => this.isNumberKey(e)}/>
                </div>
                <div class="flexColumn alignCentre titles">
                  <label class="ratesTitle">Sunday</label>
                  <input id="sunday" class="ratesInput" type="number" value={this.state.rates.sunday_rate} onChange={(e) => this.handlePayRateChange("sunday_rate", e)} onKeyPress={(e) => this.isNumberKey(e)}/>
                </div>		
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: {
        start: "17:00",
        finish: "20:00"
      }
    };
  }

  handleTimeChange = (time, e) => {
    if(time === "start"){
      this.setState({
        times:{start: e.target.value}
      })
    } else if(time === "finish"){
      this.setState({
        rates:{start: e.target.value}
      })
    }
  }

  render() {
    return(
      <div class="day">
        <div>
          <div class="flexRow flexSpaceBetween">
            <div class="dayTopRow alignCentre">
              <input class="dayCheckbox" type="checkbox" onclick="dayToggle(this, 0)" onchange="calculatePayAndHours(); setCookie('dayCheckbox0', this.checked, 30);" defaultChecked={true}/>
              <span class="dayName titles">{this.props.day}</span>		
            </div>
            <div class="break dayTopRow alignCentre">
              <input class="breakCheckbox" type="checkbox" onclick="" onchange="calculatePayAndHours(); setCookie('breakCheckbox0', this.checked, 30);" defaultChecked={true}/>
              <span class="breakName titles">Include Break</span>						
            </div>
          </div>
          <div class="times">
          <div class="flexRow titles">
            <label class="titles">In:
            <input class="titles inTimes" type="time" value={this.state.times.start} onChange={(e) => this.handleTimeChange("start", e)}/>
            </label>
          </div>
          <div class="flexRow titles">
            <label class="titles">Out:
            <input class="titles outTimes" type="time" value={this.state.times.finish} onChange={(e) => this.handleTimeChange("finish", e)}/>
            </label>
          </div>
          </div>
        </div>
        <span class="dayOff titles">Day Off</span>
        <div class="pay">
          <div class="flexColumn alignCentre">
            <span class="boldFont">Ordinary:</span>
            <span class="ordinaryPayMonToFri">$27.24</span>
            <span class="ordinaryHours">1.00 hour</span>
          </div>
          <span class="equationSymbolsDays">+</span>
          <div class="flexColumn alignCentre">
            <span class="boldFont">After 6pm:</span>
            <span class="afterSixPMPay">$81.72</span>
            <span class="afterSixPMHours">2.50 hours</span>
          </div>
          <span class="equationSymbolsDays">=</span>	
          <div class="flexColumn alignCentre">
            <span class="boldFont">Total:</span>
            <span class="totalPay">$108.96</span>
            <span class="totalHours">3.50 hours</span>
          </div>
        </div>
      </div>
    );
  }
}

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div class="border">
        <div class="flexRow flexCentre displayBox">
          <div class="flexColumn alignCentre">
            <span class="boldFont" style={{color:"chartreuse"}}>Gross Earnings</span>
            <span id="grossEarnings">$108.96</span>
          </div>
          <span class="equationSymbolsResults">-</span>
          <div class="flexColumn alignCentre">
            <span class="boldFont" style={{color:"red"}}>Tax</span>
            <span id="tax">$0</span>
          </div>
          <span class="equationSymbolsResults">=</span>
          <div class="flexColumn alignCentre">
            <span class="boldFont" style={{color:"blue"}}>Net Earnings</span>
            <span id="netEarnings">$108.96</span>
          </div>
        </div>
        <div class="flexRow flexCentre displayBox">
          <div class="flexColumn alignCentre">
            <span class="boldFont" style={{color:"darkviolet"}}>Total Hours Worked:</span>
            <span id="totalHoursWorked">3.5 hours</span>
          </div>
        </div>
      </div>
    );
  }
}

export default class REC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {
        ordinary_rate: 27.24,
        mon_fri_sixpm_elevenpm_rate: 31.69,
        saturday_rate: 32.69,
        sunday_rate: 38.13
      },
      times: {
        monday: {
          start: "17:00",
          finish: "20:00"
        }
      }
    };
  }

  handlePayRateChange = (day, e) => {
    if(day === "ordinary_rate"){
      this.setState({
        rates:{ordinary_rate: e.target.value}
      })
    } else if(day === "mon_fri_sixpm_elevenpm"){
      this.setState({
        rates:{mon_fri_sixpm_elevenpm_rate: e.target.value}
      })
    } else if(day === "saturday_rate"){
      this.setState({
        rates:{saturday_rate: e.target.value}
      })
    } else if(day === "sunday_rate"){
      this.setState({
        rates:{sunday_rate: e.target.value}
      })
    }
  }
  
  handleTimeChange = (day, action, e) => {
    if (day === "monday") {
      if(action === "start") {
        this.setState({
          times:{monday:{start: e.target.value}}
        })
      } else {
        this.setState({
          times:{monday:{finish: e.target.value}}
        })
      }
    }
  }

  render () {
    return (
      <div className="App-body" onload="init()">
        <Results/>
        <Rates/>
        <Day day={"Monday"}/>
        <Day day={"Tuesday"}/>
        <Day day={"Wednesday"}/>
        <Day day={"Thursday"}/>
        <Day day={"Friday"}/>
        <Day day={"Saturday"}/>
        <Day day={"Sunday"}/>
      </div>
    );
  }
  
}