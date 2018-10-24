import React from 'react'
import moment from 'moment'

const Alarm = (props) => {
  let num = 1
  let hr = props.alarm.format('h')
  let min = props.alarm.format('mm')
  let day = props.alarm.format('l')
  return(
      <div className='clockpage'>
        <div id='firstsection'>
          {props.time === '' ? <button className='buttons' id='dn-day' onClick={props.handleTime}>&#8592;</button> : null}
          <div className='daydisplay'>{day}</div>
          <button className='buttons' id='up-day' onClick={props.handleTime}>	&#8594;</button>
        </div>
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
  )
}

export default Alarm
