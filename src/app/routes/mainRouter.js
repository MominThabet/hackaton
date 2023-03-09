const express = require('express');

const router = express.Router();

router.use('/post', require('./v1/post'));
router.use('/user', require('./v1/user'));

module.exports = router;
