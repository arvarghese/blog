---
layout: post
title:  "Build a blog using Jekyll"
date:   2016-04-28 12:00:00 -0500
author: "Arun Varghese"
category: development
tags: [jekyll]
clipping: 
---

# TL;DR 
Jekyll is awesome static site generator that can be leveraged quite easily for making blogs. Github uses Jekyll and allows for hosting jekyll pages directly! As a blogging platform, Jekyll and Github simplify updating and maintaining your blog, once its up and running.

# So you want to start a blog
I've been checking out different blogging platforms over the past week, trying to determine which one suited my needs the best. My criteria were cheap, light, and easy to deploy changes. I looked at multiple options, like *Wordpress*, *Ghost*, *Tumblr*, *Blogger*, and even hosting your own. Then I came across *Jekyll*, a static site generator that plays well with Github, making it easy to update and deploy changes to your blog without having to worry about speed and security. Today we'll cover how to start your own blog using Jekyll and Github!

# What is Jekyll?
Jekyll is a static site generator written in Ruby. Its a very simple tool that takes text written in a markup language, and processes it into files that can be hosted on sites (HTML,CSS, etc.). So instead of having to run anything server side, all the code is generated locally, and then can be uploaded for immediate viewing. Using a command line interface, you can build your site, serve it locally for testing, upload, and then you are done!

# Setup
To get started with Jekyll, first you will need install it. On a Mac, run the following in a terminal

`~ $ gem install jekyll`

Windows is not officially supported yet, but there are ways to install, like using this [>> GUIDE <<](http://jekyllrb.com/docs/windows/)
 
After Jekyll is installed, go to the directory you want to create the site folder in and run the following

```
~ $ jekyll new my-site
~ $ cd my-site
~/my-site $ jekyll build
~/my-site $ jekyll serve
# => Now browse to http://localhost:4000
```

What this did was create a new folder called **my-site**, generated a few template files, and then started a local server where you can view the generated site. For more information on how to edit/add files to enhance your blog, checkout some of the following resources:

+ >[Jekyll](http://jekyllrb.com/)
+ >[Jekyll on Github](https://github.com/jekyll/jekyll)

# Publishing the blog
Now that you have a site generated, the files will need to be upload somewhere so that the site can be viewed on the internet. Luckily Github plays very well with Jekyll. This step requires you to have a Github account and a working knowledge of Git. Checkout out the link below for quick starter:

+ >[Learn github](https://try.github.io/)

Once you have your Github account, update the config.yml with your personal details. Make sure to update the URL param with `your_github_username.github.io`. If you want to view changes locally, make sure to stop the server and rebuild as changes to the config.yml require a server restart. Afterwards create a repository with the name: `your_github_username.github.io`, add the generated files into the repostiory, and push to Github. Now if you navigate to the URL above in the browser, you should be able to see your new blog!    

# Reference:

+ >[Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
+ >[Setup Jekyll with github](http://www.sitepoint.com/set-jekyll-blog-5-minutes-poole/)
