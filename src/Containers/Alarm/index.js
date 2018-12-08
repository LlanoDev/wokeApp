import React from 'react'
import moment from 'moment'

const Alarm = (props) => {

  let hr = props.alarm.format('h')
  let min = props.alarm.format('mm')
  let day = props.alarm.format('l')
  let period = props.alarm.format('a')

  return(
      <div className='clockpage'>

        <div id='firstsection'>
          {moment().format('l') === day ? <button className='buttons' id='dn-dayhidden' onClick={props.handleTime}>&#8592;</button> : <button className='buttons' id='dn-day' onClick={props.handleTime}>&#8592;</button>}
          <div className='daydisplay'>{day}</div>
          <button className='buttons' id='up-day' onClick={props.handleTime}>	&#8594;</button>
        </div>

        <div className='entiresection'>
          <div className='clocksection'>
            <button className='buttons' id='up-hr' onClick={props.handleTime}>&#8593;</button>
            <div className='numdisplay'>{hr}</div>
            <button className='buttons' id='dn-hr' onClick={props.handleTime}>&#8595;</button>
          </div>
          <div className='colon'>:</div>
          <div className='clocksection'>
            <button className='buttons' id='up-min' onClick={props.handleTime}>&#8593;</button>
            <div className='numdisplay'>{min}</div>
            <button className='buttons' id='dn-min' onClick={props.handleTime}>&#8595;</button>
          </div>
        </div>

        <div className='perioddisplay'>
          <button className='buttons' id='up-period' onClick={props.handleTime}>&#8593;</button>
        <br/>
          <span>{period}</span>
        <br/>
          {/* {moment().format('l') === day ? <button className='buttons' id='dn-dayhidden' onClick={props.handleTime}>&#8595;</button> : <button className='buttons' id='dn-period' onClick={props.handleTime}>&#8595;</button>} */}
          <button className='buttons' id='dn-period' onClick={props.handleTime}>&#8595;</button>
        </div>

      </div>

  )
}

export default Alarm
