const express =  require('express')
// Example without database
const companiesRouter = require('./companies/companies.routes')

// Example with Services (knex)
const studentsRouter = require('./students/students.routes')

const app = express()

app.use(express.json())

app.use('/companies', companiesRouter)
app.use('/students', studentsRouter)

const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const db = require('knex')(connection);
// creates local db var 
app.set('db', db);

app.listen(8080, ()=>console.log('Started 8080'))