import React from 'react'

import './button.css'

const Button = props => {
  return (
    <button id={props.idString}
      onClick={props.clickEvent}>
      <i className="material-icons">{props.iconText}</i>
    </button>
  )
}

export default Button