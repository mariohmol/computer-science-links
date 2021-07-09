const express = require('express')
const companiesController = require('./companies.controllers')
const companiesRouter = express.Router()

companiesRouter.route('/')
    .get(companiesController.list)
    .post(companiesController.create)

companiesRouter.route('/:id')
    .get(companiesController.read)
    .patch(companiesController.update)
    .delete(companiesController.delete)

module.exports = companiesRouter