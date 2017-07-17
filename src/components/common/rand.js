// Finds a random number in the given range (min, max)
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export { rand }