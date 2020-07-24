const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
        title: String,
        description: String,
        link: Array,
        displayname: String,
        archived: Boolean
      },
      { timestamps: true }

);



  module.exports = catalogSchema;