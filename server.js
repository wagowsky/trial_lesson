// IMPORTING EXPRESS 
const express=require("express")



// IMPORTING ROUTES
const albumRoutes=require("./routes/albumRoutes")
const artistRoutes=require("./routes/artistRoutes")




// INITIALISING EXPRESS
const app=express()




// DEFINING ROUTES AND CONNECTING THEM TO THE RELEVANT ROUTE FILES
app.use("/api/albums",albumRoutes)
app.use("/api/artists",artistRoutes)




// DEFINING THE PORT THE APP IS GOING TO LISTEN TO
app.listen(5000, console.log("server running on port 5000"))