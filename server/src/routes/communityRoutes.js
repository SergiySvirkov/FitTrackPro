const express = require('express');
const router = express.Router();
const CommunityController = require('../controllers/CommunityController');

// Define community routes
router.get('/community/posts', CommunityController.getAllPosts);
router.get('/community/posts/:postId', CommunityController.getPostById);
router.post('/community/posts', CommunityController.addPost);
router.put('/community/posts/:postId', CommunityController.updatePost);
router.delete('/community/posts/:postId', CommunityController.deletePost);

module.exports = router;
