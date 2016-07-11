var mongoose = require('mongoose');

var Post = require('./post')

var TagsSchema = mongoose.Schema({
  tag:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  count: {
    type: Object
  }
})

var Tags = mongoose.model('tags', TagsSchema);



module.exports = Tags;

