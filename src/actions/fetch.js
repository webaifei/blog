require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = function (url, type, data){
  //var url = url.search(/^https?/)>-1?url:('http://'+url)
  //var url = 'http://localhost:3000/'+url;
  return fetch(url,{
    method: type,
    headers:{
      //"Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  }).then(function (res){
    return res.json();
  }).catch(function (err){
    console.log(err.msg)
    return err;
  })

}
function toFormData(json) {
  var formData = new FormData();
  for (var key in json) {
    if (json[key] !== undefined && json[key] != null) {
      formData.append(key, json[key]);
    }
  }
  return formData;
}
