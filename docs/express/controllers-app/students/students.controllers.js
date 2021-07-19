function checkId(req,res,next){
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        next('Id is not a number')
    }
    next()
}

function checkName(req,res,nex){
    if(!req.body.name){
        next('Name is required in body')
    }
    next()
}

// Data
let students = [
    {
        id: 1,
        name: 'Apple'
    }
]

// CRUD
function create(req, res, next) {
    const { name } = req.body
    students.push({
        id: students.length + 1,
        name
    })
}

// GET by ID
function read(req, res, next) {
    const id = parseInt(req.params.id)
    const found = students.find(c => c.id === id)
    res.json(found)
}

// GET
function list(req, res, next) {
    res.json(students)
}

function update(req, res, next) {
    const { name } = req.body
    const found = students.find(c => c.id === id)
    found.name = name
    res.json(found)
}

function deleteStudent(req, res, next) {
    const id = parseInt(req.params.id)
    students = students.filter(c => c.id !== id)
    res.sendStatus(204)
}

module.exports = {
    create: [checkName, create],
    list: [list],
    read: [checkId, read],
    update: [checkId,checkName, update],
    delete: [checkId, deleteStudent]
}