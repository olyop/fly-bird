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
      score: 42
    }
    
    this.birdUp = this.birdUp.bind(this)
    this.birdDown = this.birdDown.bind(this)
  }
  
  componentDidMount() { this.timerID = setInterval( () => this.tick(), 30 ) }
  componentWillUnmount() { clearInterval(this.timerID) }
  tick() { this.setState({ scroll: this.state.scroll + 3 }) }
  
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
  
  render() {
    
    const props = this.props,
          state = this.state
    
    // eslint-disable-next-line
		if (document.getElementById('world-inner') != undefined) {
			document.getElementById('world-inner').scrollLeft = this.state.scroll
		}
    
    return (
      <div className="window game"
        style={{ backgroundColor: props.database.hex.p[9] }}>
        
        <World
          database={props.database}
          indexState={props.indexState}
          gameState={state} />
        
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