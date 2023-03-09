const express = require('express');
const router = express.Router();
const { signup } = require('../../../validationSchema/user/signup');
const { login } = require('../../../validationSchema/user/login');
const { validateRequest } = require('../../../../utils/validation');
const signUpController = require('../../../controller/user/signup');
const loginController = require('../../../controller/user/login');

router.post('/signup', [signup, validateRequest], signUpController);
router.post('/login', [login, validateRequest], loginController);

module.exports = router;
