const database = {
  
	gameTitle: 'Jump Bird',
	startButtonText: 'Start...',
  
	difficultyLevels: [
    {
      name: 'Easy',
      desc: 'Easy difficulty'
    },
    {
      name: 'Moderate',
      desc: 'Moderate difficulty'
    },
    {
      name: 'Hard',
      desc: 'Hardest difficulty'
    }
	],
  
  minWallHeight: 50,
  jumpInterval: 60,
  
  hex: {
    p: [
      '#E1F5FE', // 50
      '#B3E5FC',
      '#81D4FA',
      '#4FC3F7',
      '#29B6F6',
      '#03A9F4', // 500
      '#039BE5',
      '#0288D1',
      '#0277BD',
      '#01579B' // 900
    ],
    s: [
      '#EFEBE9', // 50
      '#D7CCC8',
      '#BCAAA4',
      '#A1887F',
      '#8D6E63',
      '#795548', // 500
      '#6D4C41',
      '#5D4037',
      '#4E342E',
      '#3E2723' // 900
    ]
  }
}

export default database