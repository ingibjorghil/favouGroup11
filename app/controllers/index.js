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
