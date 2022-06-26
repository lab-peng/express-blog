const Blog = require('../models/blog');


const blogs = [
    { id: '1', title: 'How Many Roads Must A Man Walks Before You Can Call Him A Man?', snippet: 'Each node in a singly-linked list contains not only the value but also a reference field to link to the next node. By this way, the singly-linked list organizes all the nodes in a sequence.', body: 'Each node in a singly-linked list contains not only the value but also a reference field to link to the next node. By this way, the singly-linked list organizes all the nodes in a sequence. Singly Linked List', snippet: 'Each node in a singly-linked list contains not only the value but also a reference field to link to the next node. By this way, the singly-linked list organizes all the nodes in a sequence.' },
    { id: '2', title: 'Reading and writing JSON files in Node.js', snippet: 'JavaScript Object Notation, referred to as JSON in short, is one of the most popular formats for data storage and data interchange over the internet. The simplicity of the JSON syntax makes it very easy for humans and machines to read and write.', body: 'JavaScript Object Notation, referred to as JSON in short, is one of the most popular formats for data storage and data interchange over the internet. The simplicity of the JSON syntax makes it very easy for humans and machines to read and write. JavaScript Object Notation, referred to as JSON in short, is one of the most popular formats for data storage and data interchange over the internet. The simplicity of the JSON syntax makes it very easy for humans and machines to read and write.'},
    { id: '3', title: 'Optimize an Express Server in Node.js', snippet: 'We can optimize some aspects of our Express API server to increase the performance of a Node.js application. Two major strategies are caching requests and compressing responses. Compression reduces the size of responses that are sent back to clients, saving bandwidth both for the server and for the client. Caching allows you to reuse retrieved data to speed up serving requests to your API.', body: 'We can optimize some aspects of our Express API server to increase the performance of a Node.js application. Two major strategies are caching requests and compressing responses. Compression reduces the size of responses that are sent back to clients, saving bandwidth both for the server and for the client. Caching allows you to reuse retrieved data to speed up serving requests to your API. We can optimize some aspects of our Express API server to increase the performance of a Node.js application. Two major strategies are caching requests and compressing responses. Compression reduces the size of responses that are sent back to clients, saving bandwidth both for the server and for the client. Caching allows you to reuse retrieved data to speed up serving requests to your API.' },
    { id: '4', title: 'Whatever Will Be Will Be', snippet: 'We can optimize some aspects of our Express API server to increase the performance of a Node.js application. Two major strategies are caching requests and compressing responses. Compression reduces the size of responses that are sent back to clients, saving bandwidth both for the server and for the client. Caching allows you to reuse retrieved data to speed up serving requests to your API.', body: 'We can optimize some aspects of our Express API server to increase the performance of a Node.js application. Two major strategies are caching requests and compressing responses. Compression reduces the size of responses that are sent back to clients, saving bandwidth both for the server and for the client. Caching allows you to reuse retrieved data to speed up serving requests to your API. We can optimize some aspects of our Express API server to increase the performance of a Node.js application. Two major strategies are caching requests and compressing responses. Compression reduces the size of responses that are sent back to clients, saving bandwidth both for the server and for the client. Caching allows you to reuse retrieved data to speed up serving requests to your API.'}
]

const blog_list = (req, res) => {
    // Blog.find().sort({'createdAt': -1})
    //     .then(result => {
    //         res.render('blog_views/blog_list', { title: 'Home', blogs: result})
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    res.render('blog_views/blog_list', { title: 'Home', blogs: blogs})
}

const blog_create_get = (req, res) => {
    res.render('blog_views/blog_create', {title: 'New Blog'})
}

const blog_create_post =  (req, res) => {
    // console.log(req.body);
    // const blog = new Blog(req.body);
    // blog.save()
    //     .then(() => {
    //         res.redirect('/blogs')
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    
    res.redirect('/blogs')
}

const blog_detail = (req, res) => {
    // Blog.findById(req.params.id)
    //     .then(result => {
    //         res.render('blog_views/blog_detail', { title: result.title, blog: result})
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    console.log(req.params.id)
    const blog = blogs.filter((blog) => blog.id === req.params.id)[0]
    console.log(blog.id)
    res.render('blog_views/blog_detail', { title: blog.title, blog: blog })
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