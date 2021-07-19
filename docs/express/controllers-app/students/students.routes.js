const express = require('express')
const studentsController = require('./students.controllers')
const studentsRouter = express.Router()

studentsRouter.route('/')
    .get(studentsController.list)
    .post(studentsController.create)

studentsRouter.route('/:id')
    .get(studentsController.read)
    .patch(studentsController.update)
    .delete(studentsController.delete)

module.exports = studentsRouter