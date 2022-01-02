const knex = require('knex')(require('../config/knexfile'))

module.exports.loginClient = (data) => {

    return knex.select('*').from('client').where(JSON.parse(data));
};

module.exports.getClientById = (id) => {

    return knex.select('*').from('client').where('Id', id)
};

module.exports.addNewClient = (data) => {
    return knex('client').insert([
        JSON.parse(data)
    ])
};

module.exports.updateClient = (data) => {
    let parsedBody = JSON.parse(data);
    return knex('client').update(parsedBody).where('Id', parsedBody.Id)
};
