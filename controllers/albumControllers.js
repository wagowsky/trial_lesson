const mongoose = require('mongoose');
const Album = require('../models/albumModel');

exports.getAlbums = async (req, res) => {
  try {
    const albums = await Album.find({});
    res.status(200).send(albums);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
};
