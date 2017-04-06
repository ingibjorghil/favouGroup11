function toProfil() {
	var profil = Alloy.createController('profil').getView();
	profil.open();
}

function toOpdag() {
	var opdag = Alloy.createController('opdag').getView();
	opdag.open();
}

function toIndstillinger() {
	var indstillinger = Alloy.createController('indstillinger').getView();
	indstillinger.open();
}

$.tilmeldte.open();