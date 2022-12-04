const express = require('express')
const path = require('path')
const blogs = require('../data/main')

const router = express.Router()

router.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home');
})

router.get('/main', (req, res)=>{ 
    // res.sendFile(path.join(__dirname, '../templates/bloghome.html'))
    res.render('blogHome', {
        blogs: blogs
    });
})

router.get('/mainpost/:slug', (req, res)=>{  
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })  
    // console.log(myBlog)
    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    });
    // res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
})

module.exports = router