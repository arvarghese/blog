---
layout: post
title:  "How to Setup a Dev Project"
date:   2016-05-24 12:00:00 -0500
author: "Arun Varghese"
category: development
tags: [taiga,slack,heroku,git]
clipping: 
---

### Our Setup:
+ > <i class="fa fa-fw fa-github"></i> [Github](https://github.com/): Source Code Management
+ > <i class="fa fa-fw fa-server"></i> [Travis CI](http://travis-ci.org/): Continuous Integration
+ > <i class="fa fa-fw fa-slack"></i> [Slack](https://slack.com/): Communication
+ > <i class="fa fa-fw fa-google"></i> [Hangouts](https://hangouts.google.com/): Conference Calls
+ > <i class="fa fa-fw fa-server"></i> [Heroku](https://dashboard.heroku.com/): App Hosting
+ > <i class="fa fa-fw fa-database"></i> [Mongo Lab](https://mlab.com/): Database
+ > <i class="fa fa-fw fa-line-chart"></i> [Taiga](https://taiga.io/): Project Tracking: 


I'll preface this post by saying there are many ways to start a develpment project, I would just like to share the specific tools and integrations that worked for my team.

### Github
I started by creating a Github repository to hold the source code for the project. This way each of the team members would be able to collaborate on the same project. After each of the developers created and setup Git on Github and their local, I setup an organization and added them to the project team. As for the collaboration process, I preferred to use the following feature branch workflow:

+ > `git pull`
+ > `git checkout -b feature/nameOfFeature`
+ > `git add -A`
+ > `git commit -m "note of changes"`
+ > `git push -u origin feature/nameOfFeature`
+ > `Open Pull Request to merge into dev`
+ > `Dev reviews, merges, and deletes feature branch`

### Travis CI
[Travis](https://docs.travis-ci.com/user/for-beginners) is an open source continuous integration service that works well with Github. To get started with Travis CI, sign in using your Github account and confirm/grant Travis CI access to read your Github repositories and organizations. You can run a sync to pull up your repositories in Travis CI and check which ones you want to build.
Next step is to add a [.travis.yml](https://docs.travis-ci.com/user/customizing-the-build/) to your Github repository to configure installation steps and scripts. After that just commit your changes and push the file to Github. You have just setup your Github repository with Travis CI!


### Slack and Hangouts
Now that we had the code base setup, the next focus was on setting up some channel of communication for developer discussions, team meetings, etc. After some research and bias towards already used technologies, I went with Slack, an [Electron](http://electron.atom.io/) based, powerful messaging tool with various useful integrations. Some integrations that we incorporated into our Slack were `Github, Taiga, Simple Poll, Todo, and Hangouts`.

Hangouts can be integrated directly with Slack, so simply typing `/hangouts` generates a temporary meeting room that anybody in the message group can join. This makes conference calls, standups, and demos a breeze.

I also setup some basic channels, or streams of discussion, for focusing conversations on different topics:

+ > `accounts-access` shared accounts, emails for reference
+ > `developer-resources` interesting or useful articles/guides 
+ > `project-dev` any dev related talk
+ > `team` team meetings, objective reviews, demos
+ > `github-activity` webhook activity stream for Github
+ > `taiga` webhook activity stream for Taiga 

### Heroku and Mongo Lab
For Server Hosting, we needed a quick and easy environment to deploy too, the cheaper the better. Luckily Heroku and Mongo Lab both provide free developer packages. For Heroku, a simple dyno with limited metrics is provided, and the dyno must sleep for six hours out of the day, which is okay. Mongo Lab provides a sandbox database consisting of 500mb. 

Heroku: removing project and fresh deployment

+ > `git login`
+ > `git remote rm heroku`
+ > `heroku create resume-builder5`
+ > `git add .`
+ > `git commit -m "message"`
+ > `git push heroku branchName:master`
+ > `heroku open`
+ > `heroku logs`

**Write up for provisiong a database and connecting Heroku to Mongo in progress...**

### Taiga
The last step of setting up the environment is project tracking, and for this I used Taiga. Taiga is an open source agile project management platform which also integrates with Slack through webhooks. We setup a Kanban board and integrated with Slack as follows: 

+ > In Slack, find the app store and add **Incoming WebHooks**
+ > In the **Incoming WebHooks** configurations you should find a webhook URL, copy this
+ > In Taiga, Project -> Admin -> Plugins -> Slack
+ > Paste the webhook URL
+ > Specify the slack channel to forward project updates
+ > Save the above configurations and its done!

### Conclusion
So using the tools and technologies listed above, we have setup an end to end environment for developers to collaborate, test, deploy, and track their progress towards an intended objective. I am sure there are emerging technologies that will eventually replace these, but for now these will do the job! If any of you use a different setup, let me know what works for your teams!









