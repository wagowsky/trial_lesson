const express=require("express")
const router=express.Router()
const {getArtists,addArtists}=require("../controllers/artistControllers.js")

router.route("/").get(getArtists).post(addArtists)


module.exports=router