
var fs = require('fs');
var path = require('path');

module.exports = function(context) {
	var filename = 'ADBMobileConfig.json';
	var sourceConfig = path.join(context.opts.projectRoot, 'secrets', filename);
	var destinationConfig;

	context.opts.cordova.platforms.forEach(function(platform) {
		var platformRoot = path.join(context.opts.projectRoot, 'platforms', platform);
		var destinationConfig;
		if (platform === 'ios') {
			//var projName = fileMatching(platformRoot, '.xcodeproj');//.split('.')[0];
			destinationConfig =  path.join(platformRoot, 'www', filename);
		} else if (platform === 'android') {
			//destinationConfig = 
		}
		fs.writeFileSync(destinationConfig, fs.readFileSync(sourceConfig));
	});
}

function fileMatching(path, substring) {
	var items = fs.readdirSync(path);
	for (var i = 0; i < items.length; i++) {
		if (items[i].indexOf(substring) > -1) {
			return items[i];
		}
	}
	return false;
}
