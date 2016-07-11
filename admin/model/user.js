var mongoose = require('mongoose');

var AdminUserSchema = mongoose.Schema({
	name:{
    type: String,
    required: true
  },
	pwd: {
    type: String,
    required: true
  }
})

AdminUserSchema.pre('save', function (next){
	var user = this;
	next();
})
//选择Users集合

module.exports = mongoose.model('User',AdminUserSchema);
