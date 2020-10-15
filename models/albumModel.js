// IMPORTING MONGOOSE
const mongoose = require('mongoose');

// CREATING A SCHEMA
const AlbumSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  yearReleased: {
    type: String,
    required: true,
  },
});

// CREATING A MODEL USING THE SCHEMA ABOVE
//DEFINING THE COLLECTION AND CONNECTION IT TO THE SCHEMA
const Album = mongoose.model('albums', AlbumSchema);

//EXPORTING THE MODEL
module.exports = Album;
