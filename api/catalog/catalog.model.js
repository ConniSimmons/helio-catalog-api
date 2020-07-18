const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
        title: String,
        description: String,
        link: String,
        displayname: String,
        archived: Boolean
      },
      { timestamps: true }

);



  module.exports = catalogSchema;