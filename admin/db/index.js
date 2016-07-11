/**
 * 数据库连接操作
 */
var mongoose = require('mongoose');
var log = require('../utils/index').log;
var db = require('../config.js').db;
var url = 'mongodb://'+db.user+':'+db.pwd+'@'+db.host+'/'+db.dbName;
//var url = 'mongodb://'+db.host+'/'+db.dbName;
var connection = mongoose.connection;

connection.on('error', function (info){
	if (info.message.includes('ECONNREFUSED')) {
	  info.message = 'Please make sure it\'s running and accessible!'
	}

	log('Couldn\'t connect to DB: ' + info.message)
	process.exit(1);

})
connection.on('open', function (){
	log('connect db successfully!')

})
mongoose.connect(url);

exports.connection = connection;

