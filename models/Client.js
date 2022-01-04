const knex = require('knex')(require('../config/knexfile'))

module.exports.loginClient = (data) => {
    return knex.select('*').from('client').where(data);
};

module.exports.getClientById = (id) => {
    return knex.select('*').from('client').where('Id', id);
};

module.exports.addNewClient = (data) => {
    return knex('client').insert([data]);
};

module.exports.updateClient = (data) => {
    return knex('client').update(data).where('Id', data.Id);
};
