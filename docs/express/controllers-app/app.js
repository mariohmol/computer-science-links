const express = require('express')
// Example without database
const companiesRouter = require('./companies/companies.routes')

// Example with Services (knex)
const studentsRouter = require('./students/students.routes')

const app = express()

app.use(express.json())

app.use('/companies', companiesRouter)
app.use('/students', studentsRouter)

module.exports = app