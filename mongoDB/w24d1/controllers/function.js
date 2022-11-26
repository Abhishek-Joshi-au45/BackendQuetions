const { initDB } = require('../dbConfig')

const { ObjectId } = require('mongodb')

const path =require('path')

let movieCollection;

//IIFE

(async function () {
  movieCollection = await initDB('Movies')
})();

// let dataArr =  []

const favoriteSurveyGet = (req,res)=>{
    let pat = path.join(__dirname,'../')
    res.sendFile(`${pat}/index.html`)
}


const favoriteSurveyPost = async (req,res)=>{
    // const data = req.body

    // console.log(data);
    // dataArr.push(data)
    // res.send('Data is Pushed')


    const movieData = req.body
    const name = movieData.name

    //validation

    try {
      const response = await movieCollection.insertOne(movieData)
      console.log(response)
      if (response.acknowledged) {
        res.status(201).send({ status: 'success' })
      } else {
        res.status(500).send({ status: 'error', msg: 'Cannot Post' })
      }
    } catch (err) {
      res.status(500).send({ status: 'error', msg: 'Cannot Post' })
    }
  
}

const favoriteSurveyResultsGet = async (req,res)=>{
    // res.send(`Data is : ${dataArr}`)

    const { language, name } = req.query //english

  const movies = await movieCollection.find().toArray()
  console.log(movies)
  res.send({ status: 'success', movies: movies })
}

module.exports={
    favoriteSurveyGet,
    favoriteSurveyPost,
    favoriteSurveyResultsGet
}