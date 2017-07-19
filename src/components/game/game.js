import React from 'react'

import './game.css'

import World from './world/world'
import Button from './button'

import includes from 'lodash/includes'

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
  
	// World tick functions
  componentDidMount() { this.timerID = setInterval( () => this.tick(), 33 ) } // '33' is the 'frame rate'.
  componentWillUnmount() { clearInterval(this.timerID) }
  tick() {
		
		const fallRate = 4
    
    let newArray = []
    
    for (var i = 0; i < this.state.walls.arrayLength; i++) {
      newArray.push(this.state.walls.array[i].left)
    }
		
		if (this.state.bird_y <= 80) {
			this.die()
		}
    
    if (includes(newArray, this.state.scroll + 200)) {
      this.setState((prevState, props) => ({
        scroll: prevState.scroll + 4,
				bird_y: prevState.bird_y - fallRate,
        score: prevState.score + 1
      }))
    } else {
      this.setState({
        scroll: this.state.scroll + 4,
				bird_y: this.state.bird_y - fallRate
      })
    }
  }
	
	die() {
		this.props.setHighScore(this.state.score)
		this.props.exitGame()
	}
  
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
    
    // Set the game's scroll position in the world
    // eslint-disable-next-line
		if (document.getElementById('world-inner') != undefined) {
			document.getElementById('world-inner').scrollLeft = this.state.scroll
		}
		
		// Determine bird's position
		const bird_x = state.scroll + 200,
					bird_y = state.bird_y
    
    // Log to the console the Bird's coordinates
//    console.log(`(${bird_x}, ${bird_y})`)
    
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