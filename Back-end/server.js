const express = require('express')
const app = express()



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


app.listen(3000)