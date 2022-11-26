const path=require('path')



const profile=async(req,res)=>{

  let pat = path.join(__dirname, "../")
    res.sendFile(`${pat}public/html/profile.html`)
}


module.exports={

    profile,
}