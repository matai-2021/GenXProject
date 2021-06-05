const express = require('express')
const hbs = require('express-handlebars')

const gameRouter = require('./gameRouter')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here

// Game routes
server.use('/game', gameRouter)

// Root Route:
server.get('/', (_, res) => {
  res.render('home', {})
})

module.exports = server
