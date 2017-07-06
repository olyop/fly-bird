import { rand } from '../common/rand'

const generateWalls = (difficultyLevel, minWallHeight) => {
  
  // Declare empty wall array
  let arr = [];
  
  const w = 600,
        m = minWallHeight
        
  // Determine spacing of walls
  let g
  if (difficultyLevel === 0) { g = 150 }
  if (difficultyLevel === 1) { g = 125 }
  if (difficultyLevel === 2) { g = 100 }
  
  // Determine wall range
  const r = w - (2 * m)
  
  for (var i = 3; i <= 400; i++) {
    
    let x = rand(0, r)
    
    let y = r - x
    
    let b = x
    
    let t = w - g - b
    
    // Determine spacing of walls
    let wallSpacing
    if (difficultyLevel === 0) { wallSpacing = 400 }
    if (difficultyLevel === 1) { wallSpacing = 350 }
    if (difficultyLevel === 2) { wallSpacing = 300 }
    
    arr.push({
      left: i * wallSpacing,
      wallBottom: b,
      wallTop: t
    })
  }
  
  return arr
}

export default generateWalls