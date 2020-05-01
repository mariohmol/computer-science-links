require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const errorHandler = require('./middleware/error-handler')

// import the new todorouter
const todoRouter = require('./todo/todo-router')

// move all the gray imports to the router

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption, {
  skip: () => NODE_ENV === 'test',
}))
app.use(cors())
app.use(helmet())

app.use(express.static('public'))

//move all the routes and serialize to the todorouter

//include the todorouter middlewar with the path in app.js
app.use('/v1/todos', todoRouter);

app.use(errorHandler)

module.exports = app
