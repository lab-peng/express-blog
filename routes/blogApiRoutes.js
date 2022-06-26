const express = require('express');
const blogControllers = require('../controllers/blogApiControllers');
const router = express.Router();

router.get('/add-blog', blogControllers.add_blog)

router.get('/all-blogs', blogControllers.get_all_blogs)

router.get('/single-blog/:id', blogControllers.get_single_blog)

module.exports = router;