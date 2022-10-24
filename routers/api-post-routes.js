const express = require('express');
const router = express.Router();

const { 
    getApiPosts, 
    getApiPost,
    } = require('../controllers/api-post-controller');

router.get('/api/posts', getApiPosts);
router.get('/api/posts/:id', getApiPost);

module.exports = router;