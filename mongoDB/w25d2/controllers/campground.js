const base64 = require("js-base64")
const cloudinary = require('cloudinary').v2
//console.log(process.env)

cloudinary.config({
    cloud_name: 'abhishekjoshi2030',
    api_key: '756576172359427',
    api_secret: 'LK1EJ6Dm0mQZeju50FEx9F_v6Jc',
    secure: true

  })

const  datamodel = require("../models/campground.js") 
const path = require("path")
const getcamp = (req,res)=>{
    let pat = path.join(__dirname,"../")
    res.sendFile(`${pat}public/camp.html`)
}
const getcampform = (req,res)=>{
    let pat = path.join(__dirname,"../")
    res.sendFile(`${pat}public/campform.html`)
}

const postcampdata =(req,res)=>{
    // console.log("postmapdata started")
    const postdata = req.body
    const filedata = req.file
    // console.log(filedata)
    if(filedata){
        // console.log("inside if of postdata")
        const base64FileData = base64.encode(filedata.buffer)
        // console.log(base64FileData,"this is filedata")
        cloudinary.uploader.upload(`data:${filedata.mimetype};base64,${base64FileData}`,
        async function(error,response){
            if(error){
                res.status(500).send({status:"Error Occured in uploading file"})
            }
            // console.log(response)
            postdata.image_url = response.secure_url 
            try{
            const result = await datamodel.create(postdata)
            res.redirect("/campgrounds")
            }
            catch(err){
                console.log(err)
                res.send(err.errors)
            }
            
        })
    }
    

}
module.exports = {getcamp,getcampform,postcampdata}