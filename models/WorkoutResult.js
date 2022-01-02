const knex = require('knex')(require('../config/knexfile'))

module.exports.getWorkoutResults = (id) => {

    return knex.select('*').from('workout_result').where('ClientId', id)
};

module.exports.createWorkoutResult = (data) => {
    return knex('workout_result').insert([
        JSON.parse(data)
    ])
};
