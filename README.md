# Create UWO App

A customizable framework built on top of [create-react-app](https://github.com/facebook/create-react-app)

## Getting started

```sh
git clone https://github.com/uwosh/create-uwo-app.git
cd create-uwo-app
npm install
npm start
```

### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Just create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node >= 6 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

It will create a directory called `create-uwo-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

## Editor Suggestions

Of course this project will work in any text editor, but we suggest using [Visual Studio Code](https://code.visualstudio.com/). We also suggest that you have the plugins [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) installed. We have also found the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) to be very helpful. Configurations for each of these extensions and VS Code can be found in the `.vscode` folder.

## Commands

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.rawgit.com/marionebl/create-react-app/9f62826/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
By default, it also [includes a service worker](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

## Structure

This app has preconfigured UWO branding, images, and components built in.

```
create-uwo-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── icons
│       └── // all UWO icon sizes
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── registerServiceWorker.js
    └── components
        ├── Body
        │   ├── Body.css
        │   └── Body.js
        ├── Footer
        │   ├── FooterBottom
        │   │   ├── FooterBottom.css
        │   │   └── FooterBottom.js
        │   ├── FooterMain
        │   │   ├── Badges
        │   │   │   ├── images
        │   │   │   │   └── uw-system.png
        │   │   │   ├── Badges.css
        │   │   │   └── Badges.js
        │   │   ├── Location
        │   │   │   ├── images
        │   │   │   │   └── wismap-color.png
        │   │   │   ├── Location.css
        │   │   │   └── Location.js
        │   │   ├── QuickLinks
        │   │   │   ├── QuickLinks.css
        │   │   │   └── QuickLinks.js
        │   │   ├── Resources
        │   │   │   ├── Resources.css
        │   │   │   └── Resources.js
        │   │   ├── FooterMain.css
        │   │   └── FooterMain.js
        │   ├── Footer.css
        │   └── Footer.js
        └── Header
```
