---
layout: post
title:  "Hosting Angular 2 on Heroku"
date:   2016-11-16 12:00:00 -0500
author: "Arun Varghese"
category: development
tags: [angular2,heroku]
clipping: Since I started getting into Angular 2 development, I have been looking for easy ways to hosts simple projects. Although there are plenty options available, I decided to go with Heroku, for ease of use and cheap dev options. 
---

### Hosting an [Angular 2](https://angular.io/) on [Heroku](https://heroku.com/)!

+ > [Source Code](https://github.com/gitwrecked/car-dashboard-ng2CLI)
+ > [Website](https://gw-car-dashboard.herokuapp.com/)

Since I started getting into Angular 2 development, I have been looking for easy ways to hosts simple projects. Although there are plenty options available, I decided to go with Heroku, for ease of use and cheap dev options. 

In addition to hosting I discovered a pretty neat tool that takes care of scaffolding and boilerplate code for angular projects. To create and deploy a project from scratch I just had to a couple of commands! The project I am using for the examples below is **car-dashboard-ng2CLI**. 

#### Prerequisites  
-Angular CLI installed  
-Heroku Toolbelt installed  
-Heroku Account created  
-Github account setup  

Steps are follows:

#### Create Angular 2 project  
```
ng new car-dashboard-ng2CLI
cd car-dashboard-ng2CLI
ng build
ng serve
```

#### Create Heroku App  
Login into heroku  
```
heroku login  
```  
If you already went into Heroku and created an app there, just link the two with the following:  
```
heroku apps:info --app car-dashboard-ng2CLI 
```  
Otherwise just create a brand new one:  
```
heroku create
```

#### Connect Project to Heroku  
Initialize a git repo   
```  
git init  
```  
Add heroku as a remote repo  
```  
git remote add heroku https://git.heroku.com/car-dashboard-ng2CLI.git
```  
Validate remote exists  
```  
git remote -v  
```  
Push the project to heroku  
```  
git push heroku master
```  

#### View App  
After its pushed, you can visit Heroku to check on your app's deployment, or you can view the logs using  
```
heroku logs  
```  
To go directly to the URL, enter  
```  
heroku open  
```  

And thats it! The new app should be viewable at [https://gw-car-dashboard.herokuapp.com/](https://gw-car-dashboard.herokuapp.com/). Now all that's left is to focus on building out your new app!

# Reference:

+ >[Angular 2 CLI](https://github.com/angular/angular-cli)  
+ >[Heroku Cheatsheet](http://ruten.ca/2012/02/15/heroku-cheatsheet-useful-heroku-commands-reference/)  
+ >[Angular 2/Heroku](https://www.angularonrails.com/deploy-angular-cli-webpack-project-heroku/)  

