module.exports = { getGameData }

const path = require('path')
const fs = require('fs')
const filePath = path.join(__dirname, 'game-data.json')

function getGameData (gameNum, callback) {
  fs.readFile(filePath, 'utf8', (err, gameData) => {
    if (err) {
      console.error('Had trouble loading the file at ' + filePath)
    }
    try {
      const gameDataObj = JSON.parse(gameData)
      const theGameWeWant = findSpecificGame(gameNum, gameDataObj)
      callback(theGameWeWant)
    } catch (parseError) {
      console.error('Something went wrong when parsing the file...')
    }
  })
}

function findSpecificGame (gamenum, gameDataObj) {
  const game = gameDataObj.animalInDisguise.find(game => {
    const id = Number(gamenum)
    return game.id === id
  })
  return game
}
