const movieModel = require("../models/sampleAirbnb")

const getmovie = async(req,res)=>{
    try{
        
        const movies = await movieModel.aggregate([{
            $match:{
                year:2015,
                "languages":"English",
                "imdb.rating":{
                    $gt:8.0
                }
            }
        },
            {
            $project:{
                title:1,
                cast:1,
                languages:1,
                year:1,
                "imdb.rating":true,
                "imdb.votes":1
            }
        },
        {
            $sort:{
                title:-1
            }
        },
    
        {
            $lookup:{
                from:"comments",
                localField:"_id",
                foreignField:"movie_id",
                as:"comments_added"
            }
        }

        ])
        res.send({status:"success",movies})
    }
    catch(err){
        console.log("cant find movies")
    }
}

module.exports = getmovie