const express = require('express')
const util = require('util')
const router = express.Router()
const fs = require('fs')
const readFile = util.promisify(fs.readFile)
const path = require('path')
const filePath = path.join(__dirname, 'game-data.json')

module.exports = router

router.get('/correct/:id', async (req, res) => {
  try {
    const gameData = await readFile(filePath, 'utf8')
    const gameDataObj = JSON.parse(gameData)
    const game = gameDataObj.find(game => game.id.toString() === req.params.id)
    const template = 'correct'
    const nextGameId = Number(req.params.id) === gameDataObj.length
      ? 1
      : Number(req.params.id) + 1
    res.render(template, { image: game.imageNormal, nextGameId })
  } catch (error) {
    console.log(error)
  }
})

router.get('/wrong/:id', async (req, res) => {
  try {
    res.render('wrong', { gameId: req.params.id })
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const gameData = await readFile(filePath, 'utf8')
    const gameDataObj = JSON.parse(gameData)
    const game = gameDataObj.find(game => game.id.toString() === req.params.id)
    const template = 'game'
    res.render(template, game)
  } catch (error) {
    console.log(error)
  }
})
