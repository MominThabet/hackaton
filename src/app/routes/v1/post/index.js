const express = require('express');

const controller = require('../../../controller/post');

const { isAuthenticated } = require('../../../../utils/middleware/auth/auth');
const multer = require('multer');
const router = express.Router();
const upload = multer();
router.get('/listing', isAuthenticated, controller.getAllPost);
router.post(
  '/add',
  isAuthenticated,
  upload.single('image'),
  controller.addPost
);
router.put('/edit/:postId', isAuthenticated, controller.editPost);
router.delete('/delete/:postId', controller.deletePost);

router.post('/sharedPost', isAuthenticated, controller.sharePost);

module.exports = router;
