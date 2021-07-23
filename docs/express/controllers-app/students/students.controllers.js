const StudentsService = require('./students.service')

function checkId(req, res, next) {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        next('Id is not a number')
    }
    next()
}

function checkNameEmail(req, res, nex) {
    if (!req.body.name) {
        next('Name is required in body')
    }
    if (!req.body.email) {
        next('Email is required in body')
    }
    next()
}

// CRUD
async function create(req, res, next) {
    const { name, email, phone } = req.body
    const db = req.app.get('db')
    const student = await StudentsService.getStudent(db, {
        id: students.length + 1,
        name
    })
    res.json(student)
}

// GET by ID
async function read(req, res, next) {
    const db = req.app.get('db')
    const id = parseInt(req.params.id)
    const student = await StudentsService.getStudent(db, id)
    res.json(student)
}

// GET
async function list(req, res, next) {
    const db = req.app.get('db')
    const students = await StudentsService.getStudents(db)
    res.json(students)
}

async function update(req, res, next) {
    const { name, email, phone } = req.body
    const found = {
        id: req.params.id,
        name, email, phone
    }
    const db = req.app.get('db')
    const student = await StudentsService.updateStudent(db, found)
    res.json(student)
}

async function deleteStudent(req, res, next) {
    const id = parseInt(req.params.id)
    const db = req.app.get('db')
    await StudentsService.deleteStudent(db, id)
    res.sendStatus(204)
}

module.exports = {
    create: [checkNameEmail, create],
    list: [list],
    read: [checkId, read],
    update: [checkId, checkNameEmail, update],
    delete: [checkId, deleteStudent]
}