
const StudentsService = {
    getStudents: (db) => {
        return db('students').select('*')
    },
    getStudent: (db, id) => {
        return db('students').select('*')
    },
    createStudent: (db, student) => {
        return db('students').select('*')
    },
    updateStudent: (db, student) => {
        return db('students').select('*')
    },
    deleteStudent: (db, student) => {return db('students').select('*')},
}

module.exports = StudentsService
