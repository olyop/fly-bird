import React from 'react'

import './world.css'

import Sun from './sun/sun'
import Bird from './bird/bird'
import Walls from './walls/walls'

import background from './background.png'

const World = props => {
	
  // CSS styling for the 'world-inner' element
	const style = {
		backgroundImage: 'url(' + background + ')',
		backgroundColor: props.database.hex.p[4]
	}
	
  return (
    <div className="world">      
      <div className="world-inner"
        id="world-inner"
        style={style}>

        <Sun
          x={265}
          y={450} />

        <Bird
          y={props.bird_y}
          x={props.bird_x} />
        
        <div className="score">{props.gameState.score}</div>
        	 
        <Walls
					database={props.database}
					gameState={props.gameState} />
				
				<div className="exit-game"
					onClick={props.exitGame}>
					<i className="material-icons">close</i>
				</div>

      </div>
    </div>
  )
}

export default World