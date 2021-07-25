
const StudentsService = {
    getStudents: (db) => {
        return db('students').select('*')
    },
    getStudent: (db, id) => {
        return db('students').select('*').where({id}).first()
    },
    createStudent: (db, student) => {
        return db('students').insert(student)
    },
    updateStudent: (db, id, student) => {
        const {id} = student;
        return db('students').where({id}).update(student)
    },
    deleteStudent: (db, id) => {
        return db('students').where({id}).del()
    },
}

module.exports = StudentsService
