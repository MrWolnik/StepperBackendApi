const Client = require('../models/Client');

exports.loginClient = async (req, res) => {

    let result = await Client.loginClient(req.body);
    res.json(result)
};

exports.getClientById = async (req, res) => {

    let result = await Client.getClientById(req.params.id);
    res.json(result)
};

exports.addNewClient = async (req, res) => {

    let result = await Client.addNewClient(req.body);
    res.json(result)
};

exports.updateClient = async (req, res) => {

    let result = await Client.updateClient(req.body);
    res.json(result)
};
