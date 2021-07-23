const app = require('./app')
const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const db = require('knex')(connection);
// creates local db var 
app.set('db', db);

app.listen(8080, ()=>console.log('Started 8080'))