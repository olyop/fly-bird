import React from 'react'

import './world.css'

import Sun from './sun/sun'
import Bird from './bird/bird'

import background from './background.png'

const World = props => {
  return (
    <div className="world">      
      <div className="world-inner"
        id="world-inner"
        style={{
          backgroundImage: 'url(' + background + ')',
          backgroundColor: props.database.hex.p[4] }}>

        <Sun
          top={55}
          left={2650} />

        <Bird
          top={props.gameState.birdTop}
          left={(props.gameState.scroll + 265) - 4 } />
        
        <div className="score">{props.gameState.score}</div>
        
        <div>
          {props.gameState.walls.map((wall, index) => (
            <div className="wall" style={{ left: wall.left }}
              key={index}>
              <div className="wall-inner">
                <div className="wall-top" style={{ height: wall.wallTop }}></div>
                <div className="wall-bottom" style={{ height: wall.wallBottom }}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default World