const express=require("express")
const router=express.Router()
const {getAlbums,addAlbums}=require("../controllers/albumControllers.js")

router.route("/").get(getAlbums).post(addAlbums)


module.exports=router