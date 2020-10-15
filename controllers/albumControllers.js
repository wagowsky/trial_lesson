
// IMPORTING THE RELEVANT MODEL
const Album = require('../models/albumModel');



// DEFINING AND EXPORTING A SPECIFIC CONTROLLER METHOD
// GET ALL ALBUMS(ENTRIES) FROM THE ALBUMS COLLECTION
// USING ASYNC-AWAIT AND TRY-CATCH
exports.getAlbums = async (req, res) => {
  try {
    const albums = await Album.find({});
    res.status(200).send(albums);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
};
