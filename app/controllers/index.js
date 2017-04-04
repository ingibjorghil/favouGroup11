

/**function transform(model) {
	var wpUser = model.toJSON();
	var output = {
		"email" : wpUser.email,
		"name" : wpUser.name,
		"username" : wpUser.id,
		"id" : model.cid,
		"first_name": wpUser.metadata.first_name,
		"madlavning": wpUser.metadata.madlavning
	};
	//console.log(output);
	//return output;
} */

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

			var base64 = Titanium.Utils.base64encode('admin' + ':' + '!ealweb/dev#17');
			//var user = Alloy.createModel('wpuser', params);
		
		
			console.log('This is my console: ' + params);
			var xhr = Ti.Network.createHTTPClient();
		
			xhr.open('POST','http://webdev.hilmarsdottir.com/wp-json/wp/v2/users');
			xhr.setRequestHeader('Content-type', 'application/json');
			xhr.setRequestHeader('Authorization','Basic ' + base64);
			
			xhr.setTimeout(200000);
			xhr.onload = function(e) {
					
					alert('success ' + JSON.parse(this.responseText));
			};
			xhr.onerror = function(e){
				if(JSON.parse(this.responseText).code === 'existing_user_login') {
					alert('You shall pass');
				} else {
					Ti.API.debug(e.error);
					var response = (Ti.API.info(this.responseText));
					alert(JSON.parse(this.responseText) + ' : ' + e.error + ' Get out - Add a logout function');
				} 
			};
			xhr.send(params);
				
				//alert('login from uid: '+JSON.parse(e.result).id + ', name: '+ JSON.parse(e.result).name+', email: ' + JSON.parse(e.result).email + ' birthday: ' + JSON.parse(e.result).birthday);
	        	//console.log(JSON.stringify(e) + wpUser);
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
