const express=require("express")
const router=express.Router()
const {getAlbums}=require("../controllers/albumControllers.js")

router.route("/").get(getAlbums)


module.exports=router