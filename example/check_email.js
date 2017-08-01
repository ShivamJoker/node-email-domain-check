const legit = require('../index.js');

legit('martyn@martyndavies.me', function(err, validation, addresses) {
	if (validation == true) {
		console.log('This is a real email that can accept emails!');
		console.log(JSON.stringify(addresses));
	} else {
		console.log('This domain cannot accept emails, you might want to remove it.');
	}
});
