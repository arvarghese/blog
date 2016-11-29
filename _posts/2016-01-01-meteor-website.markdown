---
layout: post
title:  "Create a Website with Meteor"
date:   2016-01-01 12:00:00 -0500
author: "Arun Varghese"
category: development
tags: [meteor,node,front-end]
clipping: I started my career as a core java  and backend developer, and for the most part of my career that was where my focus lay. Over time though I started to expanded my horizons during my free time, dabbling in various front end technologies and languages...
---

+ > http://av.meteorapp.com - currently down for maintenance

I started my career as a core java  and backend developer, and for the most part of my career that was where my focus lay. Over time though I started to expanded my horizons during my free time, dabbling in various front end technologies and languages. Web development is an ever changing landscape, and there is always something new and exciting to learn, whether it be implementing new plugins or developing using a newly adopted framework. While researching different web technologies, I came across [Meteor](https://www.meteor.com/), a Node based JavaScript platform. What enticed me to try it out was how simple it was get a local instance up and running.

```
~ $ meteor create my-site
~ $ cd my-site
~/my-site $ meteor
=> App running at: http://localhost:3000/
```

That is all it takes to setup a local server and database to view your project!

For deploying onto a remote server, there are multiple options, the easiest of which was migrating to Meteor's own galaxy servers. They provider a developer package which is pay as you go model, which is nice. For a database I used MongoLab and setup a sandbox database, a free option with a 500mb container. After creating an account in MongoLab and Meteor Galaxy:

+ > Create settings.json file under the server directory of the project
+ > Add the following entry:
+ >
```
{ 
	"galaxy.meteor.com": { 
		"env": { 
			"MONGO_URL": "", 
			"MONGO_OPLOG_URL": "" 
		} 
	}
}
```
+ > Replace MONGO_URI value with 
+ > `mongodb://<username>:<password>@<host>:<port>/<database>`, 
+ > where username/password/host/port/database can be retrieved from whatever hosting service you are using, in my case, MongoLab
+ > Run the deploy command: 
+ >
`DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy <host> --settings <settings.json>`

After that you are all set to begin developing your application with the ability to deploy to your Galaxy server as needed. Look at the resources below to get an idea of how meteor works and how to add different tools as necessary. Good luck!

### Resources
+ > [Meteor Guide](http://guide.meteor.com/)
+ > [Meteor Packages](https://atmospherejs.com/)
+ > [Meteor Galaxy](https://galaxy.meteor.com/)
+ > [MongoLab](https://mongolab.com)

