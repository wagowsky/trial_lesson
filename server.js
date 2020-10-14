
// IMPORTING EXPRESS AND MONGOOSE
const express=require("express")
const mongoose=require("mongoose")

// IMPORTING ROUTES
const albumRoutes=require("./routes/albumRoutes")
const artistRoutes=require("./routes/artistRoutes")

// INITIALISING EXPRESS
const app=express()

// BODYPARSER
app.use(express.json())

//CONNECTING TO THE DATABASE
const connectDB=async()=>{



try {
    const conn=await mongoose.connect("mongodb+srv://wagowsky:12345@trial.utxhq.mongodb.net/trial?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    }
    )
    console.log("Mongo Connected");
} catch (error) {
    console.error(`Error: ${error.message}`);
}


   
}

connectDB()

// DEFINIG ROUTES
app.use("/api/albums",albumRoutes)
app.use("/api/artists",artistRoutes)



//DEFINING THE PORT TO LISTEN TO
app.listen(5000, console.log("server running on port 5000"))