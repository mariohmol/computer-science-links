# Mac environment

A cheatsheet with step by ste to configure a Mac OS from the scratch with the best tools for development.

Install brew
* https://brew.sh

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

**Troubleshoot**
If you have errors:
```sh
git config --global http.postBuffer 5242880000
git config --global http.sslVerify "false" 
```

Install VSCode
* https://code.visualstudio.com/Download

Install Node:
* https://nodejs.org/en/download/

Install useful node libs:
* `sudo npm i -g ts-node nodemon`

**Utils**
brew install wget

## Ruby

RVM
* https://rvm.io/rvm/install

Then install the ruby use: 
`rvm install 2.6.3`

## Flutter

Use the [official docs](https://flutter.dev/docs/get-started/install/macos)or download, unzip and add in your path:
* `wget https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_1.22.5-stable.zip`
* `unzip flutter_macos_1.22.5-stable.zip && rm flutter_macos_1.22.5-stable.zip`
* `nano ~/.profile`
* Add: ~/projetos/flutter/bin
* flutter doctor --android-licenses
* flutter emulators --launch apple_ios_simulator


Install the Dart and Flutter Plugin for VSCode.

## Android

* https://developer.android.com/studio

## Java

Install JSE 8 
* https://www.oracle.com/java/technologies/javase-jre8-downloads.html

Or JDK:
 * https://www.oracle.com/java/technologies/javase-jdk15-downloads.html

## App Store

* Xcode
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -runFirstLaunch
sudo gem install cocoapods



* The Unarchiver


## Databases

**Postgres**
`brew install postgres`

```sh
To have launchd start postgresql now and restart at login:
  brew services start postgresql
Or, if you don't want/need a background service you can just run:
  pg_ctl -D /usr/local/var/postgres start
```

Install [Dbvear](https://dbeaver.io/download/) to manage postgres:
* https://dbeaver.io/files/dbeaver-ce-latest-macos.dmg


**Mongo**
`brew install mongo`

MongoCompass:
* https://www.mongodb.com/try/download/compass

RoboMongo
* https://robomongo.org/

**MySQL**
`brew install mysql`

MySQLWorkbench:
* https://dev.mysql.com/downloads/workbench/


## Dev

https://www.sourcetreeapp.com/


## Misc

Spotify: Listen to music
* http://download.spotify.com/Spotify.dmg

Gimp: Manipulate images
* `brew install gimp`






