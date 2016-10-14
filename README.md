# Adobe Mobile Plugin for Cordova/PhoneGap

## Installation

`cordova plugin add this-repository-url --save`

## ADBMobileConfig.json

This plugin doesn't manage placing ADBMobileConfig.json in the expected place, but
the [example hook](hooks/example.js) can be added to your cordova config.xml file
like below:

`<hook src="hooks/adobe-mobile-config-copy.js" type="before_compile" />`

The hook will look for one of the files below in the root of your cordova project, depending on your build parameters.
* ADBMobileConfig.debug.json
* ADBMobileConfig.release.json

If you ran `cordova build android --release`, the hook would look for the release.json file,
otherwise the debug version is used.



