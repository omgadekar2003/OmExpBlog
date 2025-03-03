const express = require('express');
const path  = require('path');

const app = express()
const port =3000

// routes
app.use('/',require(path.join(__dirname,'routes/blog.js')))


app.listen(port,()=>{
    console.log(` Blog app listen on https://localhost:${port}`)
})

