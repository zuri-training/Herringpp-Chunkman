const express = require('express')
const app = express()
const mongoose = require('mongoose')



// route starts
app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.get('/sign-up', (req, res) => {
    res.render("sign-up.ejs")
})

app.get('/sign-in', (req, res) => {
    res.render("sign-in.ejs")
})
// end routes


mongoose.connect(
    "mongodb+srv://Praise_thegodd:Yjydn499J6yZrAR@cluster0.kdxhwml.mongodb.net/?retryWrites=true&w=majority", 
    () => {
        console.log('connected')
    }
);

app.listen(3000)