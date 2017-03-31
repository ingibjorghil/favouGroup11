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

$.index.open();