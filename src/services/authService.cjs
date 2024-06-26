const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../model/userModel.cjs');
const {
    ConflictException,
    BadRequestException,
} = require('../helpers/exceptions.cjs');

const registerUser = async ({ email, firstName, lastName, password }) => {
    const existedUser = await User.findOne({ email });

    if (existedUser) {
        throw new ConflictException('User with this email already register');
    }

    const newUser = new User();
    Object.assign(newUser, {
        email,
        password,
        firstName,
        lastName,
    });
    await newUser.save();
};

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email }).exec();
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!user || !isPasswordValid) {
        throw new BadRequestException('Invalid credentials');
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME;

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION_TIME,
    });
    return token;
};

module.exports = {
    registerUser,
    loginUser,
};
