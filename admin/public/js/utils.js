/**
 * utils 常用函数功能集合
 */

var utils = {

}
/**
 * 提示框函数
 * @param  {string} msg 提示语
 * @return {}
 */
utils.alert = function (msg){
	layer.open({
        type: 1,
        area: ['360px'],
        shadeClose: true, //点击遮罩关闭
        content: '\<\div style="padding:20px;">'+msg+'\<\/div>'
    });
}
utils.msg = function (msg, iconType){
	layer.msg(msg, {icon: iconType||1});
}
utils.confirm = function(obj){
	//询问框
	var cur = layer.confirm(obj.tip, {
	  btn: ['确定','取消'] //按钮
	}, function(){
    obj.sureFn()
	  layer.close(cur);
	}, function(){
	  layer.close(cur);
	});
}
