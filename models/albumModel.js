const mongoose=require("mongoose")
const AlbumSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    yearReleased:{
        type:String,
        required:true
    }
})

const Album=mongoose.model("albums",AlbumSchema)
module.exports=Album