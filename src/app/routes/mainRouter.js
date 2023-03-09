const express = require('express');

const router = express.Router();

 router.use('/post', require('./v1/post/index'));

module.exports = router;
