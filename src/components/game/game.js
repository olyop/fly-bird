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
      birdTop: 220,
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
  birdUp() {
    
    const birdTop = this.state.birdTop,
          jumpInterval = this.props.database.jumpInterval
    
    if (birdTop === 0) {
      return
    } else if ((birdTop - jumpInterval) < 0) {
      this.setState({ birdTop: 0 })
    } else {
      this.setState({ birdTop: birdTop - jumpInterval })
    }
  }
  birdDown() {
    
    const birdTop = this.state.birdTop,
          jumpInterval = this.props.database.jumpInterval
    
    if (birdTop === 552) {
      return
    } else if ((birdTop + jumpInterval) > 552) {
      this.setState({ birdTop: 552 })
    } else {
      this.setState({ birdTop: birdTop + jumpInterval })
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
		const birdLeft = state.scroll + 265
		
		// Turn object array into simple array
		let simpleWallArray = []
		
		for (var i = 0; i < state.walls.arrayLength; i++) {
			simpleWallArray.push(state.walls.array[i].left)
		}
		
		const targetWall = simpleWallArray.filter(wall => wall > birdLeft)[0]
		
		console.log(targetWall)
    
    return (
      <div className="window game"
        style={{ backgroundColor: props.database.hex.p[9] }}>
        
        <World
          database={props.database}
          indexState={props.indexState}
          gameState={state}
					birdLeft={birdLeft} />
        
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