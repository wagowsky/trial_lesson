// IMPORTING MONGOOSE
const mongoose = require('mongoose');

// CREATING A SCHEMA
const ArtistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  yearFounded: {
    type: String,
    required: true,
  },
});
// CREATING A MODEL USING THE SCHEMA ABOVE
//DEFINING THE COLLECTION AND CONNECTION IT TO THE SCHEMA
const Artist = mongoose.model('artists', ArtistSchema);

//EXPORTING THE MODEL
module.exports = Artist;
