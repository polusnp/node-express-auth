const { getAllUsers, getUserData } = require('../services/usersService.cjs');
const { statusCode } = require('../helpers/constants.cjs');

const getCurrentUserHandler = async (req, res, next) => {
    try {
        const { email } = req.body;
        const userData = await getUserData(email);
        if (!userData) {
            return next({
                status: statusCode.NOT_FOUND,
                message: `Not found user with email ${email}`,
            });
        }
        res.status(statusCode.OK).json(userData);
    } catch (error) {
        next(error);
    }
};

const getAllUsersHandler = async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.status(statusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsersHandler,
    getCurrentUserHandler,
};
