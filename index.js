const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const server = express()

server.use(express.json())

const port = process.env.PORT || 5000;

server.listen(port, ()=> console.log(`We are listening: ${port}`))