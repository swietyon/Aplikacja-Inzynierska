# React Native Med APP

Development of React Native Med App for Android/iOS.

<img src="https://res.cloudinary.com/swietyon/image/upload/v1646045141/1_fswvx9.jpg" width="350" title="medapp">

## General info
This project is a simple react native app. Application aims to support the processing of data
after injuries through the exercises shown in it, including the way it is.
	
## Technologies
Project is created with:
* React Native 0.64.3
* Expo ~43.0.2
* axios ^0.24.0

## Requirements
You need to have nodejs
For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
  
If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy. After that install expo using second command.

    $ npm install npm -g
    $ npm install --global expo-cli
	
## Clone and install
To run this project, install it locally using npm:

```
$ git clone https://github.com/swietyon/Aplikacja-Inzynierska
$ cd Aplikacja-Inzynierska
$ npm install
```
## Running the project

    $ npm start
    $/server npm run dev
    $ ngrok http 3000
   
After that copy your ngrok http and paste it to tracker.js file located in src/api.

<img src="https://res.cloudinary.com/swietyon/image/upload/v1646046053/2_cyxw6m.jpg" width="150" title="ngrok">


## Simple build for production

    $ npm start
