import React from 'react'

import './game.css'

import World from './world/world'
import Button from './button'

import generateWalls from './generate-walls'

class Game extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      walls: generateWalls(props.indexState.difficultyLevel, props.database.minWallHeight, props.database.wallGap),
      scroll: 0,
      bird_y: 220,
      score: 0
    }
    
    this.birdUp = this.birdUp.bind(this)
    this.birdDown = this.birdDown.bind(this)
		
		this.incrementScore = this.incrementScore.bind(this)
  }
  
	// World tick function
  componentDidMount() { this.timerID = setInterval( () => this.tick(), 33 ) }
  componentWillUnmount() { clearInterval(this.timerID) }
  tick() { this.setState({ scroll: this.state.scroll + 3 }) }
  
	// Bird controls
  birdDown() {
    
    const bird_y = this.state.bird_y,
          jumpInterval = this.props.database.jumpInterval
    
    if (bird_y === 0) {
      return
    } else if ((bird_y - jumpInterval) < 0) {
      this.setState({ bird_y: 0 })
    } else {
      this.setState({ bird_y: bird_y - jumpInterval })
    }
  }
  birdUp() {
    
    const bird_y = this.state.bird_y,
          jumpInterval = this.props.database.jumpInterval
    
    if (bird_y === 552) {
      return
    } else if ((bird_y + jumpInterval) > 552) {
      this.setState({ bird_y: 552 })
    } else {
      this.setState({ bird_y: bird_y + jumpInterval })
    }
    
  }
	
	// Score functios
	incrementScore() {
		this.setState({ score: this.state.score + 1 })
	}
  
  render() {
    
    const props = this.props,
          state = this.state
    
    // eslint-disable-next-line
		if (document.getElementById('world-inner') != undefined) {
			document.getElementById('world-inner').scrollLeft = this.state.scroll
		}
		
		// Determine bird's position
		const bird_x = state.scroll + 265,
					bird_y = state.bird_y
		
		// Turn object array into simple array
		let simpleWallArray = []
		
		for (var i = 0; i < state.walls.arrayLength; i++) {
			simpleWallArray.push(state.walls.array[i].left)
		}
		
//		const targetWall = simpleWallArray.filter(wall => wall > bird_x)[0]
    
    return (
      <div className="window game"
        style={{ backgroundColor: props.database.hex.p[9] }}>
        
        <World
          database={props.database}
          indexState={props.indexState}
          gameState={state}
					exitGame={props.exitGame}
					bird_x={bird_x}
					bird_y={bird_y} />
        
        <div className="jump-buttons">
          
          <Button idString="jump-button-1"
            iconText="keyboard_arrow_up"
            clickEvent={this.birdUp} />
          
          <Button idString="jump-button-2"
            iconText="keyboard_arrow_down"
            clickEvent={this.birdDown} />
          
        </div>
        
      </div>
    )
  }
  
}

export default Game