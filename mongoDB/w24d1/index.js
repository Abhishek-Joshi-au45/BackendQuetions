const express = require('express')

const app = express()

const {favoriteSurveyGet, favoriteSurveyResultsGet, favoriteSurveyPost} = require('./controllers/function')

app.use(express.json())

app.use(express.static('w24d1'))

app.use(express.urlencoded({extended:true}));

// const { initDB } = require('./dbConfig.js')

// initDB()

app.get('/favoriteSurvey',favoriteSurveyGet)

app.get('/favoriteSurveyResults', favoriteSurveyResultsGet)

app.post('/favoriteSurvey', favoriteSurveyPost)

app.listen(8000,()=>{
    console.log('server started at 8000')
})