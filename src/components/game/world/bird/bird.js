// Import React
import React from 'react'

// Import css
import './bird.css'

// Import bird sprite
import BirdPNG from './bird.png'

// Import components
import SpriteAnimator from 'react-sprite-animator'

const Bird = props => (
	<div className="bird"
		style={{
			left: props.x,
			bottom: props.y,
		}}>

		<SpriteAnimator
			sprite={BirdPNG}
			fps={7}
			width={68}
			height={48} />

	</div>
)

export default Bird