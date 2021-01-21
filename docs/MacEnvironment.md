# Mac environment

A cheatsheet with step by step to configure a Mac OS from the scratch with the best tools for development. Teste on latest Big Sur Osx.

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

If you have issues installing rubies:
* `zlib missing`: do the Xcode steps (install Command Line Tools).
* `openssl missing`:  `brew install rbenv/tap/openssl@1.0` and `RUBY_CONFIGURE_OPTS=--with-openssl-dir=/usr/local/Cellar/openssl@1.1/1.1.1i/ rvm reinstall 2.1`
To test use: `ruby -ropenssl -e 'puts OpenSSL::OPENSSL_VERSION'`
TO test zlib we can do: `ruby -e'require "zlib"'`

----

With the Mac BigSur, you will have issues installing old rubies.
You can sintall openssl using `rvm pkg install openssl`.
You can set the autolibs on with homebre: `rvm autolibs enable` and `rvm autolibs homebrew`

First you can try to find the paths for zlib/openssl using `brew info openssql` or force the link with openssl: `brew link --force openssl`;

```sh
export LDFLAGS="-L/usr/local/opt/openssl@1.0/lib"
export CPPFLAGS="-I/usr/local/opt/openssl@1.0/include"
export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.0/lib/pkgconfig"
export optflags="-Wno-error=implicit-function-declaration"
rvm_rubygems_version=2.7.3 rvm reinstall ruby-2.2.10 --with-openssl-dir=/usr/local/Cellar/openssl@1.0/1.0.2t --with-openssl-lib=/usr/local/Cellar/openssl@1.0/1.0.2t/lib --with-openssl-include=/usr/local/Cellar/openssl@1.0/1.0.2t/include
```


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
* `brew install bundletool android-platform-tools`

Instruction for adding into [MacOS environment](https://docs.expo.io/workflow/android-studio-emulator/).


Add paths to profile:
```sh

ANDROID_SDK=$HOME/Library/Android/sdk || ANDROID_SDK=$HOME/Android/Sdk

echo 'export ANDROID_HOME=/Users/$USER/Library/Android/sdk' >> ~/.bashrc
echo 'export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/build-tools/28.0.3' >> ~/.bashrc
```

## Java

Install JSE 8 
* https://www.oracle.com/java/technologies/javase-jre8-downloads.html

Install JDK using the dmg installer in [JDK download page](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html)


## App Store

* The Unarchiver
* Xcode

```sh
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -runFirstLaunch
sudo gem install cocoapods
```

Install the Command Lines for Xcode in [Downloads Page](https://developer.apple.com/download/more/?=xcode)
* https://download.developer.apple.com/Developer_Tools/Command_Line_Tools_for_Xcode_12.3/Command_Line_Tools_for_Xcode_12.3.dmg



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

```sh
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

if you don't want/need a background service you can just run:
  `mongod --config /usr/local/etc/mongod.conf`

Database location is `/usr/lobal/var/mongodb` (be confirmed by `brew cat mongodb-comunnity`).

MongoCompass:
* https://www.mongodb.com/try/download/compass

RoboMongo
* https://robomongo.org/

**MySQL**
`brew install mysql`

To start the service use `brew services start mysql` e para conectar via console `mysql -uroot`

MySQLWorkbench:
* https://dev.mysql.com/downloads/workbench/


For older versions: install `brew install mysql@5.7`, `brew postinstall mysql@5.7` and 
`brew services start mysql@5.7`.
If you need the paths, run `brew info mysql@5.7` to get the info.
For config go to: `/usr/local/etc/my.cnf`

If you have problems with installation, password or anything else, try this process:
```sh
brew remove mysql@5.7
brew cleanup
rm -rf /usr/local/var/mysql
brew install mysql@5.7
rm -rf /usr/local/var/mysql
mysqld --initialize
mysql_secure_installation -uroot -p"pass_generated_before"
```


## Dev

Git:
https://www.sourcetreeapp.com/


## Misc

Spotify: Listen to music
* http://download.spotify.com/Spotify.dmg

Gimp: Manipulate images
* `brew install gimp`

Network:
Test ports used by services like mysql, for instance:
* nc -v localhost 3306


Updatedb:
Configure the files indexing to find files easy:
* `sudo /usr/libexec/locate.updatedb`

If you want, creat a linke to use like linux `updatedb`:
* `sudo ln -s /usr/libexec/locate.updatedb /usr/local/bin/updatedb`



