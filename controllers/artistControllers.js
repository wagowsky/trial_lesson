const mongoose=require("mongoose")
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
