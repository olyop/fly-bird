// Import React
import React from 'react'

// Import css
import './difficulty-selector.css'

const DifficultySelector = props => (
  <div className="difficulty-selector">
    
    <div className="difficulty-selector-button">
      {props.indexState.difficultyLevel === 0 ? null : (
        <i className="material-icons" onClick={props.makeDifficultyEasier}>keyboard_arrow_left</i>
      )}
    </div>

    <span>{props.database.difficultyLevelNames[props.indexState.difficultyLevel]}</span>

    <div className="difficulty-selector-button">
      {props.indexState.difficultyLevel === 2 ? null : (
        <i className="material-icons" onClick={props.makeDifficultyHarder}>keyboard_arrow_right</i>
      )}
    </div>

  </div>
)

export default DifficultySelector