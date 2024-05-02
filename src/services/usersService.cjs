const { User } = require('../model/userModel.cjs');

const getUserData = async (email) => {
    try {
        const userData = await User.findOne({ email });
        return userData;
    } catch (error) {
        throw error;
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getUserData,
    getAllUsers,
};
