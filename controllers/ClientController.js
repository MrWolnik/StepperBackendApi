const Client = require('../models/Client');

exports.loginClient = async (req, res) => {

    let result = await Client.loginClient(req.body);
    res.json({result: result, statusCode: 200})
};

exports.getClientById = async (req, res) => {

    let result = await Client.getClientById(req.params.id);
    res.json({result: result, statusCode: 200})
};

exports.addNewClient = async (req, res) => {

    let result = await Client.addNewClient(req.body);
    res.json({result: result, statusCode: 200})
};

exports.updateClient = async (req, res) => {

    let result = await Client.updateClient(req.body);
    res.json({result: result, statusCode: 200})
};
