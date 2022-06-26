const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const blogApiRoutes = require('./routes/blogApiRoutes')

const app = express();
app.set('view engine', 'ejs')
app.listen(3000)

// const dbURL = 'mongodb://localhost:27017'
// const dbURL = 'mongodb+srv://root:hello123@cluster0.l0iylyh.mongodb.net/test?retryWrites=true&w=majority'
// const dbURL = process.env.dbURL;
// const dbURL = process.env.MONGODB_URI;
// mongoose.connect(dbURL)
//     .then(() => app.listen(3000))
//     .catch(err => console.log(err))

// middleware
// app.use((req, res, next) => {
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// use imported middleware
app.use(express.static('static'))
app.use(express.urlencoded({ extended: true }));  // middleware for submit form data
app.use(morgan('dev'));

app.get('/', (req, res) => {
    // const blogs = [
    //     { title: 'Singly Linked List', snippet: 'Each node in a singly-linked list contains not only the value but also a reference field to link to the next node. By this way, the singly-linked list organizes all the nodes in a sequence.' },
    //     { title: 'Reading and writing JSON files in Node.js', snippet: 'JavaScript Object Notation, referred to as JSON in short, is one of the most popular formats for data storage and data interchange over the internet. The simplicity of the JSON syntax makes it very easy for humans and machines to read and write.' },
    //     { title: 'Optimize an Express Server in Node.js', snippet: 'We can optimize some aspects of our Express API server to increase the performance of a Node.js application. Two major strategies are caching requests and compressing responses. Compression reduces the size of responses that are sent back to clients, saving bandwidth both for the server and for the client. Caching allows you to reuse retrieved data to speed up serving requests to your API.'}
    // ]
    // const context = {
    //     title: 'Home',
    //     // blogs: blogs,
    //     blogs,
    // }
    // res.render('index', context)
    res.redirect('/blogs')
})

app.use('/blogs/api', blogApiRoutes);

app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    res.send(
        `<h3 style = "font-family: Jetbrains Mono, monospace; color: #777" >
        Page not found
        <a href="/blogs" style="text-decoration: none; color: #04AA6D!important;">Back Home</a>
        </h3>`)
})


// For Vercel Deployment
// https://shadowsmith.com/how-to-deploy-an-express-api-to-vercel
module.exports = app;