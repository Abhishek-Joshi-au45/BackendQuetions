let  movies = require('./Data/data.js')

express=require('express')

const  app=express()

app.use(express.json())





app.get('/movies' , (req,res)=>{

    res.send(movies)
})


app.post('/movies', (req,res)=>{

  const   newpost=req.body
  console.log(newpost);

  movies.push(newpost)

  res.json(movies)

})


app.put('/movies/:movieID' , (req,res)=>{

const   queryParam=req.params;
  const {movieID}=queryParam;
  console.log(queryParam);

  const newData=req.body;
  console.log(newData);

  
  const { newName, newlanguage }=newData
  
    movies=movies.map((movie)=>{
      if(movie.id===movieID){

        if(newName){

          movie.name=newName
      }
      
      if(newlanguage){
     
        movie.language=newlanguage}
      }

        return movie
    })

   res.send(movies)
  })
  

  app.delete('/movies/:movieID', (req,res)=>{

    const {movieID}=req.params;

    deletedArray=movies

    deletedArray=deletedArray.filter((movie)=>{

      return !movie.id=== movieID
    })

    res.send(movies)
  })

  





app.listen("8000",()=>{

    console.log(`server is start`);
})