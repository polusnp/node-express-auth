const express = require('express');
const usersRouter = express.Router();
const { authGuard } = require('../middlewares/authGuard.cjs');

const {
    getCurrentUserHandler,
    getAllUsersHandler,
} = require('../controllers/usersController.cjs');

usersRouter.get('/current', authGuard, getCurrentUserHandler);
usersRouter.get('/', getAllUsersHandler);

module.exports = usersRouter;
