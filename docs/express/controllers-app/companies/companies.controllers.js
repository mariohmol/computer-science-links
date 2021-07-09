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
let companies = [
    {
        id: 1,
        name: 'Apple'
    }
]

// CRUD
function create(req, res, next) {
    const { name } = req.body
    companies.push({
        id: companies.length + 1,
        name
    })
}

// GET by ID
function read(req, res, next) {
    const id = parseInt(req.params.id)
    const found = companies.find(c => c.id === id)
    res.json(found)
}

// GET
function list(req, res, next) {
    res.json(companies)
}

function update(req, res, next) {
    const { name } = req.body
    const found = companies.find(c => c.id === id)
    found.name = name
    res.json(found)
}

function deleteCompany(req, res, next) {
    const id = parseInt(req.params.id)
    companies = companies.filter(c => c.id !== id)
    res.sendStatus(204)
}

module.exports = {
    create: [checkName, create],
    list: [list],
    read: [checkId, read],
    update: [checkId,checkName, update],
    delete: [checkId, deleteCompany]
}