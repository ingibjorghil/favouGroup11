function toProfil() {
	var profil = Alloy.createController('profil').getView();
	profil.open();
}

function toOpdag() {
	var opdag = Alloy.createController('opdag').getView();
	opdag.open();
}

function toTilmeldte() {
	var tilmeldte = Alloy.createController('tilmeldte').getView();
	tilmeldte.open();
}

$.indstillinger.open();