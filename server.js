const express=require("express")
const app=express()

const albumRoutes=require("./routes/albumRoutes")
const artistRoutes=require("./routes/artistRoutes")


app.use("/api/albums",albumRoutes)
app.use("/api/artists",artistRoutes)

app.listen(5000, console.log("server running on port 5000"))