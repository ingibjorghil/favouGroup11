//var args = arguments[0] || {};

function transform(model) {
	var userInfo = model.toJSON();
	var output = {
		"email" : userInfo.email,
		"name" : userInfo.name,
		"wpId" : userInfo.id,
		"id" : model.cid,
		"first_name": userInfo.metadata.first_name,
		"madlavning": userInfo.metadata.madlavning
	};
	console.log(output);
	return output;
}


var fb = require('facebook');

fb.requestWithGraphPath('me', {fields: 'id' } , 'GET', function(e) {
    var fbId = JSON.parse(e.result).id;
    
    Alloy.Collections.wpuser.where({name: fbId});
    
});



var jsonArgs = JSON.stringify(args.data);
var jsonArgs2 = JSON.parse(jsonArgs);

var user = Alloy.Collections.wpuser;
user.fetch();
//$.wpuser.set(jsonArgs);
console.log('Console: ' + JSON.stringify(args.data));
