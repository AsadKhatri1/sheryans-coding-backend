

const express = require('express')
const app = express()
app.set("view engine", "ejs")
app.use(express.static('./public'))

app.use(function(req,res,next){
    console.log('middleware 1')
    next()
})
app.use(function(req,res,next){
    console.log('middleware 2')
    next()
})


app.get('/', function (req, res) {
  res.render('index',{name:'Khatri'})
})

app.get('/profile', function (req, res) {
  res.send('Hello ')
})
app.get('/profile/:username', function (req, res) {
  res.send(`hello from ${req.params.username}`)
})

app.get('/data',function(req,res){
res.status(200).send('maza aagya')
})



app.listen(8080)