import React, { Component } from 'react';
import './App.css'
import Alarm from '../Alarm'
import moment from 'moment'

class App extends Component {
  state = {
    pickTime: moment('1230', 'h:mm a'),
    time: ''
  }
  // new comment
  // new comment
  // new comment
  // new comment
  // new comment
  // new comment
  // new comment
  // new comment
  // new comment
  // new comment
  changeTime = (e) => {
    let pickTime = this.state.pickTime
    switch (e.target.id) {
      case 'up-hr':
          pickTime.add(1, 'hours')
        break
      case 'dn-hr':
          pickTime.subtract(1, 'hours')
        break
      case 'up-min':
          pickTime.add(1, 'minutes')
        break
      case 'dn-min':
          pickTime.subtract(1, 'minutes')
        break
      case 'up-period':
          pickTime.add(12, 'hours')
        break
      case 'dn-period':
          pickTime.subtract(12, 'hours')
        break
      case 'up-day':
          pickTime.add(24, 'hours')
        break
      case 'dn-day':
          pickTime.subtract(24, 'hours')
        break
      default:
    }
    this.setState({pickTime})
  }

  showTime = () => {
    let currTime = moment().format('L h:mm:ss a')
    this.setState({time: currTime})
  }

  render() {
    setInterval(()=>{this.showTime()}, 1)
    return (
      <div className="entirepage">
        <div className="realtime">{this.state.time}</div>
        <Alarm alarm={this.state.pickTime} time={this.state.time} handleTime={this.changeTime}/>
        <div className="setAlarm">
          <button className='setbutton' type='button' onClick={this.alarmSet}>SET ALARM</button>
          {/* alarm for {this.state.pickTime.format('L hh:mm a')} */}
        </div>
      </div>
    )
  }
}

export default App;
