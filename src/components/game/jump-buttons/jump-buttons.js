import React from 'react'

import './jump-buttons.css'

const JumpButtons = props => {
  
  return (
    <div className="jump-buttons">
      
      <button id="jump-button-1"
        onClick={props.birdUp}>
        <i className="material-icons">keyboard_arrow_up</i>
      </button>
      
      <button id="jump-button-2"
        onClick={props.birdDown}>
        <i className="material-icons">keyboard_arrow_down</i>
      </button>
      
    </div>
  )
}

export default JumpButtons