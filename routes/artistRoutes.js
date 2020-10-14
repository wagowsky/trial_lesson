const express=require("express")
const router=express.Router()
const {getArtists}=require("../controllers/artistControllers.js")

router.route("/").get(getArtists)


module.exports=router