// Import random number function
import { rand } from '../common/rand'

const generateWalls = (difficultyLevel, minWallHeight) => {
  
  // Declare empty wall array
  let arr = [];
  
  // Height of the world
  const w = 600
  
  // The minimum height of each wall
  const m = minWallHeight
        
  // Determine spacing of walls
  let g
  if (difficultyLevel === 0) { g = 175 }
  if (difficultyLevel === 1) { g = 150 }
  if (difficultyLevel === 2) { g = 125 }
  
  // Determine wall range
  const r = w - (2 * m)
  
  // Loop for calucting each wall's coordaintes, height and width
  for (var i = 3; i <= 100; i++) {
    
    // Determine a random number inside the wall range
    let x = rand(0, r)
    
    // Determine bottom wall height
    let b = x
    
    // Determine top wall height
    let t = w - g - b
    
    // Determine spacing of walls determined by the difficulty setting
    let wallSpacing
    if (difficultyLevel === 0) { wallSpacing = 400 }
    if (difficultyLevel === 1) { wallSpacing = 350 }
    if (difficultyLevel === 2) { wallSpacing = 300 }
    
    // Push walls coordaintes, height and width into a array of objects
    arr.push({
      left: i * wallSpacing,
      wallBottom: b,
      wallTop: t
    })
  }
  
  return {
		array: arr,
		arrayLength: arr.length
	}
}

export default generateWalls