function toOpdag() {
	var opdag = Alloy.createController('opdag').getView();
	opdag.open();
}


var fb = require('facebook');
fb.addEventListener('login', function(e) {
    if (e.success == true) {
        alert('login from uid: '+e.uid+', name: '+ JSON.parse(e.data).name + fb.loggedIn);
        //label.text = 'Logged In = ' + fb.loggedIn;
    }
    else if (e.cancelled) {
        // user cancelled
       alert('cancelled');
   }
    else {
       alert(e.error);
    }
});

$.loginwindow.fbProxy = fb.createActivityWorker({lifecycleContainer: $.loginwindow});

function APIcall (){
fb.requestWithGraphPath('me', {fields: 'name,first_name, email, link'}, 'GET', function(e) {
    if (e.success) {
        alert(e.result);
    } else if (e.error) {
        alert(e.error);
    } else {
        alert('Unknown response');
    }
});

}

$.loginwindow.open();