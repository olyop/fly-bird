// Import React
import React from 'react'

// Import CSS
import './start-screen.css'

// Import components
import DifficultySelector from './difficulty-selector/difficulty-selector'

const GameTitle = props => (
  <h1 style={{ backgroundColor: props.database.hex.p[8] }}>{props.database.gameTitle}</h1>
)

const StartGame = props => {
  
  let style = {
    color: props.database.hex.p[8],
    boxShadow: '0 10px',
    backgroundColor: props.database.hex.p[7]
  }
  
  return (
    <button onClick={props.startGame} style={style}>
      <span>{props.database.startButtonText}</span>
    </button>
  )
}

const StartScreen = props => {
	return (
		<div className="window start-screen"
      style={{ backgroundColor: props.database.hex.p[5] }}>

			<GameTitle
        database={props.database} />
			
			<DifficultySelector
        database={props.database}
        indexState={props.indexState}
        makeDifficultyEasier={props.makeDifficultyEasier}
        makeDifficultyHarder={props.makeDifficultyHarder} />
			
			<StartGame
        database={props.database}
        startGame={props.startGame} />

		</div>
	)
}

export default StartScreen