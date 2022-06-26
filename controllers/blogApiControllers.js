const Blog = require('../models/blog');

const add_blog = (req, res) => {
    const blog = new Blog({
        title: 'Blog A',
        snippet: 'About Blog A',
        body: 'Super Interesting Blog A'
    });
    blog.save()
        .then(result => res.send(result))
        .catch(err => console.log(err));
}

const get_all_blogs = (req, res) => {
    Blog.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
}

const get_single_blog = (req, res) => {
    Blog.findById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    add_blog,
    get_all_blogs,
    get_single_blog

}