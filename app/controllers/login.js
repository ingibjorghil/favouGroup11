/**function transform(model) {
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
}*/

var fb = require('facebook');

fb.addEventListener('login', function(e) {
    if (e.success === true) {
	fb.requestWithGraphPath('me', {fields: 'id, name, email, location, picture, birthday'} , 'GET', function(e) {
		if(e.success) {
			var params = JSON.stringify({
			email: JSON.parse(e.result).email,
			username: JSON.parse(e.result).id,
			password: 'password1234'
			});
			var userdata = {
				"email": JSON.parse(e.result).email,
				"username": JSON.parse(e.result).id
			};

			var base64 = Titanium.Utils.base64encode('admin' + ':' + '!ealweb/dev#17');
		
			var xhr = Ti.Network.createHTTPClient();
			
			var fbId = JSON.parse(e.result).id;
			
			xhr.open('POST','http://webdev.hilmarsdottir.com/wp-json/wp/v2/users');
			xhr.setRequestHeader('Content-type', 'application/json');
			xhr.setRequestHeader('Authorization','Basic ' + base64);
			
			xhr.setTimeout(200000);
			xhr.onload = function(e) {
				
				//var user = Alloy.Collections.wpuser.getByCid('name' === JSON.parse(e.result).id);
				
				//Alloy.createController("profil", {data: user}).profilWin.open();
					//alert('success ' + JSON.parse(this.responseText));
			};
			xhr.onerror = function(e){
				if(JSON.parse(this.responseText).code === 'existing_user_login') {
					
					//user = Alloy.Collections.wpuser.where({name: fbId});	
					//Alloy.createController("profil", {data: user}).profilWin.open();				
					Alloy.createController("profil").profilWin.open();
					//alert('You shall pass');
				} else {
					Ti.API.debug(e.error);
					
					fb.logout();
					alert(JSON.parse(this.responseText) + ' : ' + e.error + ' Get out - Add a logout function');
				} 
			};
			xhr.send(params);
		}
		else if (e.error) {
			alert(e.error);
		}	
		else {
			alert('unknown response');
		}
	});
        
        //label.text = 'Logged In = ' + fb.loggedIn;
    }
    else if (e.cancelled) {
         //user cancelled
        alert('cancelled');
    }
    else {
        alert(e.error);
    }
});

$.loginWin.fbProxy = fb.createActivityWorker({lifecycleContainer: $.loginWin});

$.loginWin.open();
