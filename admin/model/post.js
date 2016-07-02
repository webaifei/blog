/**
 * 文章集合操作
 * 1. 需要封装一些常用的操作接口 方便业务逻辑层调用
 */

var mongoose = require('mongoose');
// 文章集合的结构（模拟传统的表结构）
var PostSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: String,
	author: {
		type: String,
		default: 'ngnice'
	},
	// 文章的标签
	// html css js nodejs others diary
	tags:{
		type: Array
	},
	hidden:{
		type: Boolean,
		default:false
	},
	createTime:{
		type: Date,
		default: Date.now
	},

	updateTime:{
		type: Date,
		default: Date.now
	}
});
/**
 * 常用的功能函数
 */

//find
PostSchema.statics.findAll = function (query){
  return this.find(query);
}

// findById
PostSchema.statics.findById = function ( id ){
  return this.findOne({_id: id})
}

// 返回值是一个构造函数
var Post = mongoose.model('post', PostSchema);

module.exports = Post
