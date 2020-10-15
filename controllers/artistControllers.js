
// IMPORTING MONGOOSE
const mongoose=require("mongoose")

// IMPORTING THE RELEVANT MODEL
const Artist=require("../models/artistModel")

exports.getArtists= async (req, res) => {
    try {
      const artists = await Artist.find({});
      res.status(200).send(artists);
    } catch (error) {
      res.status(400);
      res.send(error.message);
    }
  };
