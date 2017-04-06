function toOpdag() {
	var opdag = Alloy.createController('opdag').getView();
	opdag.open();
}

function toIndstillinger() {
	var indstillinger = Alloy.createController('indstillinger').getView();
	indstillinger.open();
}

function toTilmeldte() {
	var tilmeldte = Alloy.createController('tilmeldte').getView();
	tilmeldte.open();
}

$.profil.open();