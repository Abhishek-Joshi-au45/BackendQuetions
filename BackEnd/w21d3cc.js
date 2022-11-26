const express = require('express')
const app=express()

var randomColor = require('randomcolor'); // import the script
var color = randomColor(); // a hex code for an attractive color

const all = require("everyday-fun");
    
var joke= all.getRandomJoke()
var quote =all.getRandomQuote()
var riddle=all.getRandomRiddle()
 
var currentDate=new Date();

//add middlewares
app.use(express.json()) //accept json form of data

app.get("/randomcolor",(req, res)=>{
res.send(color)
});

app.get("/randomjoke",(req, res)=>{
res.send(joke)
});


app.get("/randomquote",(req, res)=>{
res.send(quote)
});

app.get("/randomriddle",(req, res)=>{
res.send(riddle)
});


app.get("/randomdate",(req, res)=>{
res.send(currentDate)
});

app.listen(8000, () => {
console.log("Server Started Successfully at Port 8000")
})