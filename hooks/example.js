
var fs = require('fs');
var path = require('path');

module.exports = function (context) {
	var filename = 'ADBMobileConfig.json';
	var type = context.opts.options.debug ? 'debug' : 'release';
	var sourceConfig = path.join(context.opts.projectRoot, 'ADBMobileConfig.' + type + '.json');

	context.opts.cordova.platforms.forEach(function (platform) {
		var platformRoot = path.join(context.opts.projectRoot, 'platforms', platform);
		var destinationConfig;

		if (platform === 'ios') {
			destinationConfig = path.join(platformRoot, 'www', filename);
			fs.writeFileSync(destinationConfig, fs.readFileSync(sourceConfig));
		} else if (platform === 'android') {
			destinationConfig = path.join(platformRoot, 'assets/www', filename);
			fs.writeFileSync(destinationConfig, fs.readFileSync(sourceConfig));
			destinationConfig = path.join(platformRoot, '../../www', filename);
			fs.writeFileSync(destinationConfig, fs.readFileSync(sourceConfig));
		}
	});
};

