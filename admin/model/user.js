var mongoose = require('mongoose');

var AdminUserSchema = mongoose.Schema({
	name:String,
	pwd: String
})

AdminUserSchema.pre('save', function (next){
	var user = this;
	next();
})
//选择Users集合

exports.User = mongoose.model('User',AdminUserSchema);