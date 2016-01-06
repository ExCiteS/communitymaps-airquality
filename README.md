# Air Quality

Air Quality is a mini [Cordova](https://cordova.apache.org) application for collecting measurements that is currently developed by [Mapping for Change](http://mappingforchange.org.uk), and is supporting the [GeoKey platform](http://geokey.org.uk) developed by [Extreme Citizen Science](http://ucl.ac.uk/excites) at the University College London.

## Requirements

Air Quality requires the [geokey-airquality](https://github.com/ExCiteS/geokey-airquality) extension to be installed alongside GeoKey.

## Build Application

Follow official documentation to [install Node.js](https://github.com/joyent/node/wiki/installation). You may need to install [Git](http://git-scm.com/downloads) and [Ruby](http://ruby-lang.org/en/installation) too.

Install Bower, Grunt's Command Line Interface and Cordova globally:

```console
sudo npm install -g bower
sudo npm install -g grunt-cli
sudo npm install -g cordova
```

Navigate to project's directory and install required Bower components and npm modules locally:

```console
bower install
npm install
```

Copy configuration file from the sample with `cp config.sample.js config.js`. Edit application's configuration and add the URL of GeoKey platform used (without `/api/`), also client's ID.

Build Angular application:

```console
grunt
```

Download all the required Cordova plugins:

```console
cordova plugin add cordova-plugin-dialogs
cordova plugin add cordova-plugin-network-information
cordova plugin add cordova-plugin-geolocation
```

Also, add platforms (SDK must be installed for each phone platform):

```console
cordova platform add browser
cordova platform add ios
cordova platform add android
```

Build Air Quality application for all platforms:

```console
cordova build --release
```

Or individual platforms:

```console
cordova build --release browser
cordova build --release ios
cordova build --release android
```

### Sign Android APK

Copy the release key from Dropbox of Mapping for Change to your working directory.

Sign the app:

```console
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore airquality-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name
```

Locate the zipalign tool (usually inside `/path/to/Android/sdk/build-tools/<version>/zipalign`) and run the following:

```console
zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk air-quality.apk
```

For example, on OS X with Android SDK version 23.0.2, the command should be:

```console
~/Library/Android/sdk/build-tools/23.0.2/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk air-quality.apk
```

The finalised signed app can then be uploaded to [Google Play Store](https://play.google.com/apps/publish/).

## Develop Application

When building Angular application, use:

```console
grunt dev
```

Changes will be watched and applied when saving.

When Air Quality application is compiled, test it on the emulator:

```console
cordova emulate <platform>
```

iOS requires ios-sim to be installed globally:

```console
sudo npm install -g ios-sim
```

Or connected device:
To test the app on the actual Android device, use:

```console
cordova run android --target=<device>
```

Run `adb devices` to see all available Android devices.
