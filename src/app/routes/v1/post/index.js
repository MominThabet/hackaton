const express = require("express");

const controller = require("../../../controller/post");

const router = express.Router();

router.get("/listing", controller.getAllPost);
router.post("/add", controller.addPost);
router.put("/edit/:userId", controller.editPost);
router.delete("/delete/:userId", controller.deletePost);

module.exports = router;