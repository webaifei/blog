/**
 * 
 */

var utils = {}
utils.log = function (){
	return console.log.apply(console, arguments);
}
module.exports = utils;

