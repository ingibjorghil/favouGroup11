var args = arguments[0] || {};

var jsonArgs = JSON.stringify(args.data);
var jsonArgs2 = JSON.parse(jsonArgs);

var user = Alloy.Collections.wpuser;
user.fetch();
//$.wpuser.set(jsonArgs);
console.log('Console: ' + JSON.stringify(args.data));

