const express = require('express');
const router = express.Router();
const {
    validateData,
    credentialUserSchema,
    createUserSchema,
} = require('../middlewares/usersValidations.cjs');
const {
    postRegisterUserHandler,
    postLoginUserHandler,
} = require('../controllers/authController.cjs');

router.post(
    '/register',
    validateData(createUserSchema),
    postRegisterUserHandler
);
router.post('/login', validateData(credentialUserSchema), postLoginUserHandler);

module.exports = router;
