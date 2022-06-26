const Blog = require('../models/blog');

const blog_list = (req, res) => {
    Blog.find().sort({'createdAt': -1})
        .then(result => {
            res.render('blog_views/blog_list', { title: 'Home', blogs: result})
        })
        .catch(err => {
            console.log(err)
        })
}

const blog_create_get = (req, res) => {
    res.render('blog_views/blog_create', {title: 'New Blog'})
}

const blog_create_post =  (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);
    blog.save()
        .then(() => {
            res.redirect('/blogs')
        })
        .catch(err => {
            console.log(err)
        })
}

const blog_detail = (req, res) => {
    Blog.findById(req.params.id)
        .then(result => {
            res.render('blog_views/blog_detail', { title: result.title, blog: result})
        })
        .catch(err => {
            console.log(err)
        })
}

const blog_delete = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({ delete: 'success'})
        })
        .catch(err => {
            console.log(err)
        })
}




module.exports = {
    blog_list,   // or blog_list: blog_list,
    blog_create_get,
    blog_create_post,
    blog_detail,
    blog_delete,
}