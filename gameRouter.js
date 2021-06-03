const express = require('express')
const router = express.Router()

module.exports = router

// a test GET route to test for traffic coming in on the /game/ route:
router.get('/:gamenum', (req, res) => {
    res.send(`This page will display the game number: ${req.params.gamenum}`)
})