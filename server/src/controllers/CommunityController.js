const Post = require('../models/Post');

// Get all posts in the community
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add a new post to the community
const addPost = async (req, res) => {
  const { text } = req.body;
  try {
    const newPost = await Post.create({ text });
    res.json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Update post details
const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { text } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(postId, { text }, { new: true });
    if (!updatedPost) {
      return res.status(404).send('Post not found');
    }
    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Delete a post from the community
const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).send('Post not found');
    }
    res.json(deletedPost);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
};
