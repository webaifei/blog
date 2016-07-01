/**
 * # module.exports vs exports
 * 1. module.exports 直接跟上一个函数 就是导出这个函数 赋值一个对象 就是导出一个对象
 * 2. exports 只能是导出一个对象 所以在 使用 require的时候 获取的是一个对象 注意！！！
 * 3. module.exports 比exports 的优先级更高 同时设置两个 即使后赋值exports，导出的也是moudle.exports 的值
 */
// exports 只能导出一个对象
exports.say = function (){
	console.log('exports ')
}
// 导出单个函数
module.exports = function (){
	console.log('module exports')
}
// // 导出一个对象
module.exports = {
	name: 'nice',
	say: function (){
		console.log( this.name )
	}
}


