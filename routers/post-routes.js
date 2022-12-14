const express = require('express');
const router = express.Router();

const { upload } = require('../middlewares/fileFilter.js');

const { 
    //getHome,
    getPosts, 
    getPost, 
    addPost,
    sendPost, 
    } = require('../controllers/post-controller');

router.get('/', addPost);
router.get('/posts/:id', getPost);
router.get('/newPost', addPost);
router.get('/posts', getPosts);
router.post("/create", upload, sendPost);

module.exports = router;