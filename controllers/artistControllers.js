// IMPORTING THE RELEVANT MODEL
const Artist = require('../models/artistModel');

// DEFINING AND EXPORTING A SPECIFIC CONTROLLER METHOD
// GET ALL ALBUMS(ENTRIES) FROM THE ALBUMS COLLECTION
// USING ASYNC-AWAIT AND TRY-CATCH

exports.getArtists = async (req, res) => {
  try {
    const artists = await Artist.find({});
    res.status(200).send(artists);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
};
