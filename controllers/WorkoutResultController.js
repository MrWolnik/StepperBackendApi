const Client = require('../models/WorkoutResult');

exports.getWorkoutResults = async (req, res) => {
    let result = await Client.getWorkoutResults(req.params.id);
    res.json({result: result, statusCode: 200})
};

exports.createWorkoutResult = async (req, res) => {
    let result = await Client.createWorkoutResult(req.body);
    res.json({result: result, statusCode: 200})
};