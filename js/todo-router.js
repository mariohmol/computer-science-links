// fix the path for todo folder
const TodoService = require('./todo-service')

//move the gray imports from app to router
const xss = require('xss')

// include the expres router
const express = require('express')
const jsonParser = express.json()
const path = require('path')

//copy the serialize from app as well
const serializeTodo = todo => ({
    id: todo.id,
    title: xss(todo.title),
    completed: todo.completed
  })

  // Create a new router
const todoRouter = express.Router();
  
//change from app to todoRouter
todoRouter
//move the path /v1/todos to the app.js
.route('/')
.get((req,res,next)=>{
    // Call the todoservice, check the service file to see what is the parameter
    // in this case is just the db connection, so if u have a question look down in other services calls
    TodoService.getTodos(req.app.get('db'))

    //make a .then that maps all elements in todos array and serialize one by one
    .then(todos=>res.json(todos.map(serializeTodo)))
    // the catch with next in case of an error
    .catch(next);
})
.post(jsonParser,(req,res,next)=>{
    // get just the fields that u expect from the body
    // in this case completed may not be included in the body, so u set a default value false
    const {title, completed=false} = req.body;

    // then create the object that will be sent to the database with all the fields
    const todo = {title, completed};

    // check the required fields, in this case is just the title
    if(!title){
        // responds with a bath request(400) and send the proper message to the user
        return res.status(400).send('The title is required');
    }

    // Call the service to create the todo, check what is the parameretrs.
    // in this case is just the db connection and the new todo object
    TodoService.insertTodo(
        req.app.get('db'),
        todo
    )

    // receive back the todo that was included in the database
    .then(newTodo => {
        // respond with a 201 (created)
        res.status(201)
        // and serialize just one object, thats why we dont have the .map as the getTodos
        .json(serializeTodo(newTodo))
    })
    // the catch with next in case of an error
    .catch(next);
})

//change from app to todoRouter
todoRouter
//move the path /v1/todos to the app.js
.route('/:todo_id')
.all((req, res, next) => {
  if(isNaN(parseInt(req.params.todo_id))) {
    return res.status(404).json({
      error: { message: `Invalid id` }
    })
  }
  TodoService.getTodoById(
    req.app.get('db'),
    req.params.todo_id
  )
    .then(todo => {
      if (!todo) {
        return res.status(404).json({
          error: { message: `Todo doesn't exist` }
        })
      }
      res.todo = todo
      next()
    })
    .catch(next)
})
.get((req, res, next) => {
  res.json(serializeTodo(res.todo))
})
.delete((req, res, next) => {
  TodoService.deleteTodo(
    req.app.get('db'),
    req.params.todo_id
  )
    .then(numRowsAffected => {
      res.status(204).end()
    })
    .catch(next)
})
.patch(jsonParser, (req, res, next) => {
  const { title, completed } = req.body
  const todoToUpdate = { title, completed }

  const numberOfValues = Object.values(todoToUpdate).filter(Boolean).length
  if (numberOfValues === 0)
    return res.status(400).json({
      error: {
        message: `Request body must content either 'title' or 'completed'`
      }
    })

  TodoService.updateTodo(
    req.app.get('db'),
    req.params.todo_id,
    todoToUpdate
  )
    .then(updatedTodo => {
      res.status(200).json(serializeTodo(updatedTodo[0]))
    })
    .catch(next)
})


// export the router
module.exports = todoRouter;
