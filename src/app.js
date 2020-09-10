 const express = require('express')
 const path = require('path')
 const hbs = require('hbs')
 const fs = require('fs')
 const data = require('./generate')

 const app = express()
 const port = process.env.PORT || 3000

 app.use(express.static(path.join(__dirname,'../assets')))
 app.set("view engine", "hbs")
 const hbsdir = path.join(__dirname, '../templates/views')
 app.set('views', hbsdir)
 const partials = path.join(__dirname, '../templates/partials')
 hbs.registerPartials(partials)


 app.get('', (req,res)=>{
     res.render('index', {
        header : "Ramayan Quotes",
         name : "Harshit Yadav",
         head : "Jai Shri Ram",
         footer : 'Created By :',
         error : "Page not found"
     })
 })
 //about
 app.get('/about',(req,res)=>{
     res.render('about',{
         header : "Ramayan Quotes",
         name : "Harshit Yadav",
         footer : "Created By : ",
         error : "Page not Found"
     })

//wildcard
app.get('*',(req,res)=>{
    res.render('error',{
        header : "Ramayan Quotes",
         name : "Harshit Yadav",
         footer : "Created By : ",
         error : "Page not Found"
    })
})
 })
 //print random quote
 app.get('/random', (req,res)=>{
    let random = data[Math.floor(Math.random()*data.length)]
   res.send({
    quote2 : random.quote,
    quotee2 : random.character
   })
   
 })

 //print random quote by specific person

app.get('/quote',(req,res)=>{
    let quotee = req.query.name
    if(!quotee) {return res.send({error: 'No character provided'})}
    let quotes = data.filter(e=> e.character==quotee)
    let quotesArray = quotes.map(obj=>obj.quote)
    res.send({
        quote : quotesArray[Math.floor(Math.random()*quotesArray.length)],
        quotee : quotee
    })
    // console.log(quotesArray[Math.floor(Math.random()*quotesArray.length)])
})

 //
 app.listen(port, ()=>{
     console.log('Server is running on '+ port )
 })