// Import React
import React from 'react'
import ReactDOM from 'react-dom'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

// Import components
import StartScreen from './components/start-screen/start-screen'

// Import database
import databaseImport from './database'

// Index component
class Index extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			hasGameStarted: true,
			score: 0,
			difficultyLevel: 0
		}
		
		this.startGame = this.startGame.bind(this)
		this.closeGame = this.closeGame.bind(this)
		this.makeDifficultyEasier = this.makeDifficultyEasier.bind(this)
		this.makeDifficultyHarder = this.makeDifficultyHarder.bind(this)
		this.incrementScore = this.incrementScore.bind(this)
	}
	
	startGame() {
		this.setState({ hasGameStarted: true })
	}
	
	closeGame() {
		this.setState({ hasGameStarted: false })
	}
	
	makeDifficultyEasier() {
		if (this.state.difficultyLevel > 0) {
			this.setState({ difficultyLevel: this.state.difficultyLevel - 1 })
		}
	}
	
	makeDifficultyHarder() {
		if (this.state.difficultyLevel < 2) {
			this.setState({ difficultyLevel: this.state.difficultyLevel + 1 })
		}
	}
	
	incrementScore() {
		this.setState({ score: this.state.score + 1 })
	}
	
	render() {
    
    const props = this.props
		
		return (
			<div className="index"
        style={{ backgroundColor: props.database.hex.p[9] }}>
				<div className="index-inner">

					<StartScreen
            database={props.database}
            gameState={this.state}
            makeDifficultyEasier={this.makeDifficultyEasier}
            makeDifficultyHarder={this.makeDifficultyHarder} />

				</div>
			</div>
		)
	}
	
}

// Render to DOM
ReactDOM.render(
  <Index database={databaseImport} />,
  document.getElementById('root')
)