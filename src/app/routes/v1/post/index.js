const express = require("express");

const controller = require("../../../controller/post");

const {isAuthenticated} = require('../../../../utils/middleware/auth/auth')

const router = express.Router();

router.get("/listing", isAuthenticated , controller.getAllPost);
router.post("/add", isAuthenticated , controller.addPost);
router.put("/edit/:postId",isAuthenticated, controller.editPost);
router.delete("/delete/:postId", controller.deletePost);

router.post("/sharedPost", isAuthenticated , controller.sharePost);

module.exports = router;