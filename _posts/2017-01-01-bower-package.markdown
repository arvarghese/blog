---
layout: post
title:  "Creating a Bower Package"
date:   2017-2-01 12:00:00 -0500
author: "Arun Varghese"
category: development
tags: [node,javascript,bower]
thumbnail: http://i.imgur.com/NvVZ0yZh.jpg
clipping: I've always wanted to publish some kind of library or package that people could use in their own projects. Recently I got into design discussion with one of my colleagues at work about the Macbook Photo Screensavers, specifically the one with the sliding tiles. We both wanted to try to emulate it using just CSS and flexbox. Over a period of a few days though I shifted from CSS to Javascript through JQuery to handle the layout and animations. And creating a working demo, I began thinking of how to package this in such a way that my colleague could also use this as a front-end dependency in his own project. Enter bower...  
---

### Creating a Bower Package  
+ > [Source Code](https://github.com/arvarghese/photo-tiles)
+ > [Demo](http://avarghese.me/photo-tiles/)  
  
Live Demo:  

<p data-height="265" data-theme-id="dark" data-slug-hash="zNmjEg" data-default-tab="js,result" data-user="avarghese" data-embed-version="2" data-pen-title="Photo-Tiles" class="codepen">See the Pen <a href="https://codepen.io/avarghese/pen/zNmjEg/">Photo-Tiles</a> by Arun  (<a href="http://codepen.io/avarghese">@avarghese</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  

I've always wanted to publish some kind of library or package that people could use in their own projects. Recently I got into design discussion with one of my colleagues at work about the Macbook Photo Screensavers, specifically the one with the sliding tiles. We both wanted to try to emulate it using just CSS and [flexbox](http://www.w3schools.com/css/css3_flexbox.asp). Over a period of a few days though I shifted from CSS to Javascript through JQuery to handle the layout and animations. And creating a working demo, I began thinking of how to package this in such a way that my colleague could also use this as a front-end dependency in his own project. Enter [bower](https://bower.io/).  

Bower allows you to manage your package using your github as the source, and allows others to use your package simply by issuing the following command:

~~~ bash
$ bower install <package>#<version>
~~~

If the `#<version>` is left out, bower will pull the latest version. I figured out how to remove all dependencies in my project, like [jQuery](https://jquery.com/) and [Bootstrap](http://getbootstrap.com/), and use barebones CSS and javascript to generate photo tiles. I've listed the steps below needed to create your first bower package, the one i'll be using as an example is my [Photo Tiles](https://github.com/arvarghese/photo-tiles) package! The following steps can be done after you have created you have created a working github repository.

#### Steps:  
Initialize bower in you github project:  

~~~ bash
$ bower init
~~~

My bower.json  

```
{
  "name": "photo-tiles",
  "description": "Photo Tiles, JS implementation of Mac's Photo Tiles Screensaver",
  "main": [
    "dist/photo-tiles.js",
    "dist/photo-tiles.css"
  ],
  "authors": [
    "avarghese4790"
  ],
  "license": "MIT",
  "homepage": "https://github.com/arvarghese/photo-tiles",
  "ignore": [
    "assets/",
    "node_modules",
    ".bowerrc",
    ".gitignore",
    ".npmignore",
    ".travis.yml",
    "bower.json",
    "gulpfile.js",
    "index.html",
    "package.json",
    "server.js",
    "tsconfig.json"
  ],
  "keywords": [
    "photos",
    "tiles",
    "photo-tiles",
    "library"
  ],
  "dependencies": {}
} 
```  

Add your package to the bower registry:  

~~~ bash
$ bower register photo-tiles https://github.com/arvarghese/photo-tiles.git
~~~

Now that your package is registered, you need to version it so when others try to pull your package they can get the correct version.
Bower uses github to manage versions. To create a new version for your package, add a new tag in github:

~~~ bash
$ git tag 0.1.0
$ git push origin 0.1.0
~~~

Now all a person would have to do to download your package at a specific version is:  

~~~ bash
$ bower install photo-tiles#0.1.0
~~~ 

Don't forget to add a `README.md` to the repo with usage and installation instructions!  

# Reference:
+ > [Bower](https://bower.io/docs/creating-packages/)  


