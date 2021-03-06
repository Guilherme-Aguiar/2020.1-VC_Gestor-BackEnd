const express = require("express");

const PostController = require("../controller/PostController");

const postsRouter = express.Router();

postsRouter.get("/", PostController.index);
postsRouter.put("/:post_id", PostController.statusChange);

module.exports = postsRouter;
