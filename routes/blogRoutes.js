const express = require('express');
const blogControllers = require('../controllers/blogControllers');
const router = express.Router();

router.get('/', blogControllers.blog_list)

router.get('/create', blogControllers.blog_create_get)

router.post('/', blogControllers.blog_create_post)

router.get('/:id', blogControllers.blog_detail)

router.delete('/:id', blogControllers.blog_delete)



module.exports = router;