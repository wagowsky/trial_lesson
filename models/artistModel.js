const mongoose=require("mongoose")
const ArtistSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    yearFounded:{
        type:String,
        required:true
    }
})

const Artist=mongoose.model("artists",ArtistSchema)
module.exports=Artist