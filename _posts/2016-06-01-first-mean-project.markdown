---
layout: post
title:  "First MEAN Stack App!"
date:   2016-06-01 12:00:00 -0500
author: "Arun Varghese"
category: development
tags: [mean,mongodb,angular,express,node]
clipping: 
---

+ > [Source Code](https://github.com/gitwrecked/resume-builder)
+ > [Website](https://resume-builder5.herokuapp.com/)

### Main Node Modules
```
"body-parser": "1.15.1"
"bower": "1.7.9"
"express": "4.13.4"
"jsonwebtoken": "7.0.0"
"material-design-lite": "1.1.3"
"method-override": "2.3.6"
"mongoose": "4.4.19"
"morgan": "1.7.0"
"nodemon": "1.9.2"
"passport": "0.3.2"
```

### Main Bower Components
```
"bootstrap": "3.3.6"
"font-awesome": "4.6.3"
"animate.css": "3.5.1"
"angular": "1.5.6"
"angular-route": "1.5.6"
"material-design-lite": "1.1.3"
"wow": "1.1.2"
"angular-ui-router": "ui-router#0.3.0"
"angular-mocks": "1.5.6"
```

### Great Addons
```
"gulp": "3.9.1"
"jasmine": "2.4.1"
"jshint": "2.9.2"
"karma": "0.13.22"
```

### Directory Structure Using Feature Based Hiearchy
```
.
├── app
│   ├── index.html #main html page
│   ├── css #compiled with gulp from /scss
│   ├── assets #any static files, images,fonts,etc.
│   ├── libs #vendor libraries downloaded with bower
│   └── js #all js files
│       ├── controllers #controllers
│       │   ├── controller1.js
│       │   └── controller2.js
│       ├── models #mongo schemas
│       │   ├── model1.js
│       │   └── model2.js
│       ├── services #services
│       │   ├── service1.js
│       │   └── service2.js
│       ├── directives #directives
│       │   ├── directive1.js
│       │   └── directive2.js
│       ├── filters #filters
│       │   ├── filter1.js
│       │   └── filter2.js
│       ├── routes #angular routes
│       │   └── app.routes.js #angular routes using ui.router
│       ├── features #feature based hiearchy
│       │   ├── feature1
│       │   │   ├── feature1.controller.js
│       │   │   └── feature1.template.html
│       │   └── feature2
│       │       ├── feature2.controller.js
│       │       └── feature2.template.html
│       └── resumebuilder.app.js #angular bootstrap
├── jshint
│   └── output.html #code analysis output
├── test
│   ├── report 
│   │   └── index.html #test report output
│   ├── controller #controller specs
│   └── services #service specs
├── node_modules #all modules listed in `package.json`
├── scss
│   ├── style.scss #scss files that compile into `/app/css/style.css`
│   └── _partial.scss #importable scss files
├── config
│   ├── config.json #project configs for server/database
│   └── karma.conf.js #test runner configuration
├── api.routes.js #backend api routes
├── bower.json #front end components (bootstrap,angular,font-awesome,etc.)
├── .travis.yml #travis-ci config for builds
├── .bowerrc #configuration for bower, output directory
├── gulpfile.js #task manager, dev only
├── package.json #backend components, download with `npm install`
├── procfile #heroku app type identifier
├── readme.md #readme
└── server.js #node server
```