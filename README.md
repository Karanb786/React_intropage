# React_intropage
##Installation instruction##
#Windows:#
##Installing dependencies##
**You will need Node, the React Native command line interface, Python2, a JDK, and Android Studio. While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.**
##Node, Python2, JDK##
** I recommend installing Node and Python2 via Chocolatey, a popular package manager for Windows. React Native also requires a recent version of the Java SE Development Kit (JDK), as well as Python 2. Both can be installed using Chocolatey. Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:**
```choco install -y nodejs.install python2 jdk8```
##The React Native CLI##
**Node comes with npm, which lets you install the React Native command line interface. Run the following command in a Command Prompt or shell:**
```npm install -g react-native-cli```
##Android development environment##
**Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.**
##1. Install Android Studio##
**[Download and install Android Studio.](https://developer.android.com/studio/index.html) Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:**
-Android SDK
-Android SDK Platform
-Performance (Intel ® HAXM)
-Android Virtual Device
##Clone this project##
```$git clone https://github.com/Karanb786/React_intropage```
##Run Project##
```react-native run-android```
##For Mac OS you need to install node,watchman##
```brew install node
brew install watchman```
##The React Native CLI##
```npm install -g react-native-cli```
##Running your React Native application##
**Install Xcode before working**
```cd ProjectName
react-native run-ios```


