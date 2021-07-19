
const StudentsService = {
    getStudents: (db) => {
        return db('students').select('*')
    },
    getStudent: (db, id) => {
        return db('students').select('*').where({id})
    },
    createStudent: (db, student) => {
        return db('students').insert(student)
    },
    updateStudent: (db, student) => {
        const {id} = student;
        return db('students').where({id}).update(student)
    },
    deleteStudent: (db, id) => {
        return db('students').select('*')
    },
}

module.exports = StudentsService
