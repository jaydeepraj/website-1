//Runs express script and sets default port to 3000 if environment is not set.
module.exports = {
	debug: {
		script: 'express.js',
		options: {
			nodeArgs: ['--debug'],
			env: {
				port: process.env.PORT || 3000
			}
		}
	}
};
