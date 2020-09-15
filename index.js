const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const server = express()

server.use(express.json())

function generateToken({username, role}){
    const payload = {
        username, role
    }
    const config = {
        jwtSecret: process.env.JWT_SECRET || 'I like Socks'
    }
    const options = {
        expiresIn = '1d'
    }
    return jwt.sign(payload, config.jwtSecret, options)
}

const port = process.env.PORT || 5000;

server.listen(port, ()=> console.log(`We are listening: ${port}`))