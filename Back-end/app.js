const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')


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


mongoose.connect(process.env.DB_CONNECTION, () => {
        console.log('connected')
    }
);

app.listen(3000)