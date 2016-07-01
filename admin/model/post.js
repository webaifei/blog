/**
 * 文章集合操作
 */

var mongoose = require('mongoose');
// 文章集合的结构（模拟传统的表结构）
var postSchema = mongoose.Schema({
	title: String,
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

// 返回值是一个构造函数
var Post = mongoose.model('post', postSchema);

module.exports = Post