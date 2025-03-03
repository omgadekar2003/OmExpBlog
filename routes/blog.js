const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()

// Navigation page
router.get('/nav', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/nav.html'));
});

//home
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'))
   
})
//blog home page
router.get('/bloghome', (req, res) => {
    // blogs.forEach(e=>{
    //     console.log(e.title,e.content,e.intern)
    // });
    res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
})
//

//fetching all blogs:
router.get('/blogpage/:slug', (req, res) => {
    myBlog = blogs.filter((e) => {
       return e.slug == req.params.slug
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
})

module.exports = router  
