const mongoose = require('mongoose');


const { Schema } = mongoose;

  const ArticleSchema = new Schema({
    title:  {
        type: String, 
        required: true
    }, // String is shorthand for {type: String}
    author: {
        type: String, 
        required: true
    },
    description:  {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now },
  });
  module.exports =  mongoose.model('Article', ArticleSchema)