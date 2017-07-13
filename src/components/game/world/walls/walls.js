import React from 'react'

import './walls.css'

const Wall = props => (
	<div>
		{props.gameState.walls.array.map((wall, index) => (
			<div className="wall" style={{ left: wall.left }}
				key={index}>
				<div className="wall-inner">
					<div className="wall-top" style={{ height: wall.wallTop }}></div>
					<div className="wall-bottom" style={{ height: wall.wallBottom }}></div>
				</div>
			</div>
		))}
	</div>
)

export default Wall