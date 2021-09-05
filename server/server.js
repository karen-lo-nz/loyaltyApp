const express = require('express')
const path = require('path')

const stampsRoutes = require('./routes/stamps')
const usersRoutes = require ('./routes/users')
const shopsRoutes = require ('./routes/shops')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/stamps', stampsRoutes)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/shops', shopsRoutes)

module.exports = server
