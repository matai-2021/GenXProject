const express = require('express')
const router = express.Router()
const { getGameData } = require('./utils.js')

module.exports = router

router.post('/:gamenum/guess', (req, res) => {
  console.log('This is on the POST route!')
  res.redirect('/game/2')
})

// This route will be used to display each of the three games. localhost:3000/game/2 will show the second game etc
router.get('/:gamenum', (req, res) => {
  // const template = 'game'
  getGameData(req.params.gamenum, (game) => {
    console.log(game)

    // Just to check we receive the right data:
    // res.send(`Game: ${game.id}. Choices: ${game.choices[0]}, ${game.choices[1]} or ${game.choices[2]}. Correct answer: ${game.correctAnswer}`)

    const template = 'game'
    const viewData = { ...game }
    res.render(template, viewData)
  })
})
