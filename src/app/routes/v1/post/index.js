const express = require('express');

const controller = require('../../../controller/post');

<<<<<<< HEAD
const { isAuthenticated } = require('../../../../utils/middleware/auth/auth');

=======
const { isAuthenticated } = require("../../../../utils/middleware/auth/auth");
const multer = require("multer");
>>>>>>> origin/Post
const router = express.Router();
const upload = multer();
router.get("/listing", isAuthenticated, controller.getAllPost);
router.post(
  "/add",
  isAuthenticated,
  upload.single("image"),
  controller.addPost
);
router.put("/edit/:postId", isAuthenticated, controller.editPost);
router.delete("/delete/:postId", controller.deletePost);

<<<<<<< HEAD
router.get('/listing', isAuthenticated, controller.getAllPost);
router.post('/add', isAuthenticated, controller.addPost);
router.put('/edit/:postId', isAuthenticated, controller.editPost);
router.delete('/delete/:userId', controller.deletePost);
=======
router.post("/sharedPost", isAuthenticated, controller.sharePost);
>>>>>>> origin/Post

module.exports = router;
