const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const { model } = require('mongoose');

//CREATE POST
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
