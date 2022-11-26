 const  express=require("express");
  const  app=express()
  const multer  = require('multer')

  let movies=require("./data.js")
  var cloudinary = require('cloudinary').v2;

  const base64 = require('js-base64')


  app.use(express.static("public"))


  app.get('/movies' ,(req,res)=>{
      res.send(movies)

  })
 


//var cl = new cloudinary.Cloudinary({cloud_name: "abhishekjoshi2030", secure: true});
  
const upload = multer({ storage: multer.memoryStorage() })

cloudinary.config({
  cloud_name: 'abhishekjoshi2030',
  api_key: '756576172359427',
  api_secret: 'LK1EJ6Dm0mQZeju50FEx9F_v6Jc',
  secure: true
  
})





  app.post("/movies",upload.single('moviesImg'), (req,res)=>{

    

   let movieData=req.body
 let  fileData=req.file

 console.log(movieData);
 console.log(fileData);


 if (fileData) {
    //convert buffer to base64
    const base64FileData = base64.encode(fileData.buffer)
    
    
    cloudinary.uploader.upload(`data:${fileData.mimetype};base64,${base64FileData}`, function (error, response) {
      if (error) {
        res.status(500).send({ status: 'Error Occured in uploading file' })
      }
               console.log(response);
      movieData.imageUrl = response.secure_url //{id, name, language, imageUrl}

      movies.push(movieData)
      console.log(movies);
      res.send(movies)
      
    })
  }


   
  
  



  })


app.listen("8000", ()=>{

    console.log(`Server is Start at 8000`);
})