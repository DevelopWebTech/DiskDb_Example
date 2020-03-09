var express = require('express')
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
var helmet = require('helmet')
app.use(helmet())
require('dotenv').config()

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.ejs')
})

var port = 3000;
app.listen(port, () => {
    console.log(`Server Started On ${port}`)
})