// Import React
import React from 'react'

// Import CSS
import './sun.css'

const Sun = props => (
	<div className="sun"
		style={{
			bottom: String(props.y) + 'px',
			left: String(props.x) + 'px'
		}}>
		<div className="ray_box">
			<div className="ray ray1"></div>
			<div className="ray ray2"></div>
			<div className="ray ray3"></div>
			<div className="ray ray4"></div>
			<div className="ray ray5"></div>
			<div className="ray ray6"></div>
			<div className="ray ray7"></div>
			<div className="ray ray8"></div>
			<div className="ray ray9"></div>
			<div className="ray ray10"></div>
		</div>
	</div>
)

export default Sun