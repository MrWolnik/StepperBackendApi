const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');
const WorkoutResultController = require('../controllers/WorkoutResultController');
const { login } = require('../controllers/UserController');
const { checkToken } = require('../middlewares/auth');
const errorHandler = require('../middlewares/errors');
const { saveToken, handlePushTokens } = require('../middlewares/pushNotification');


router.post('/login', login);

router.get("/", (req, res) => {
    res.send("App running");
});


router.post('/loginClient',
    // checkToken,
    errorHandler.catchAsync(ClientController.loginClient)
);

router.get('/getClientById/:id',
    // checkToken,
    errorHandler.catchAsync(ClientController.getClientById)
);

router.post('/addNewClient',
    // checkToken,
    errorHandler.catchAsync(ClientController.addNewClient)
);

router.post('/updateClient',
    // checkToken,
    errorHandler.catchAsync(ClientController.updateClient)
);

router.get('/getWorkoutResults/:id',
    // checkToken,
    errorHandler.catchAsync(WorkoutResultController.getWorkoutResults)
);

router.post('/createWorkoutResults',
    // checkToken,
    errorHandler.catchAsync(WorkoutResultController.createWorkoutResult)
);

router.post("/token", (req, res) => {
    saveToken(req.body.token);
    res.send(`Received token ${req.body.token}`);
});

router.post("/message", (req, res) => {
    handlePushTokens(req.body);
    res.send(`Received hash: ${req.body.hash}`);
});

module.exports = router;
