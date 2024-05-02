const { statusCode } = require('../helpers/constants.cjs');
const { registerUser, loginUser } = require('../services/authService.cjs');

const postRegisterUserHandler = async (req, res, next) => {
    try {
        const body = req.body;
        await registerUser(body);
        res.status(statusCode.CREATED).json({ status: 'success' });
    } catch (error) {
        next(error);
    }
};

const postLoginUserHandler = async (req, res, next) => {
    try {
        const body = req.body;
        const token = await loginUser(body);
        res.status(statusCode.OK).json({ status: 'success', token });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    postRegisterUserHandler,
    postLoginUserHandler,
};
