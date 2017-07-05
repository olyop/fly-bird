import { rand } from '../common/rand'

const generateWalls = (difficultyLevel, minWallHeight, wallGap) => {
  
  // Declare empty wall array
  let arr = [];
  
  const w = 600,
        m = minWallHeight,
        g = wallGap
  
  // Determine wall range
  const r = w - (2 * m)
  
  for (var i = 3; i <= 500; i++) {
    
    let x = rand(0, r)
    
    let b = m + x
    
    let t = w - (b + g)
    
    arr.push({
      left: i * 300,
      wallBottom: b,
      wallTop: t
    })
  }
  
  return arr
}

export default generateWalls