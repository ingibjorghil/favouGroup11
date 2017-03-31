
Alloy.Collections.instance("wpUser").fetch();

var user = Alloy.Models.wpuser;

function registerUser(e) {
	var params = JSON.stringify({
		email: $.value,
		password: $.value,
		roles: $.value,
	});
}

function changeWindowProfil(){
	var profil = Alloy.createController("profil").getView().open();
};
function changeWindowopgave(){
	var opgavedetaljer = Alloy.createController("opgavedetaljer").getView();
};

var fb = require('facebook');

fb.addEventListener('login', function(e) {
    if (e.success === true) {
        alert('login from uid: '+e.uid+', name: '+ JSON.parse(e.data).name);
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
