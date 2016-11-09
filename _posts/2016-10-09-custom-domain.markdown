---
layout: post
title:  "Setting Up a Custom Domain"
date:   2016-10-09 12:00:00 -0500
author: "Arun Varghese"
category: development
tags: [dns,domain]
---

### Setting Up a Custom Domain Using [Namecheap](https://www.namecheap.com/) && [Github](https://github.com/)

As you may or may not know, when you create a github account, you also get one site for your user/organization, and unlimited repository pages. Its as simple as adding an `index.html` to the master branch of each repository and allowing it to use Github Pages (*Settings>GitHub Pages>Source>Master>Save*).

For this example I will use my current domain, [avarghese.me](http://avarghese.me/)  

#### Github Config:  
*Settings>Custom Domain>`avarghese.me`>Save*
<a target="_blank" href="http://i.imgur.com/10Wjauk.jpg"><img class="img-travel" src="http://i.imgur.com/10Wjaukh.jpg" alt
	="github config"/></a>  

#### Namecheap Config:  
*Dashboard>`avarghese.me`>Manage>Advanced DNS*  
`A record, host=@ value=192.30.252.153`  
`A record, host=@ value=192.30.252.153`  
`CNAME record, host=www value=avarghese4790.github.io`  
<a target="_blank" href="http://i.imgur.com/3MlT0ou.jpg"><img class="img-travel" src="http://i.imgur.com/3MlT0ouh.jpg" alt
	="namecheap config"/></a>  
The following can help debug to see if the configurations are done correctly. Both calls from the domain and your repository url should have the same A record IP.  

Command:  
`dig avarghese.me +nostats +nocomments +nocmd`  
Output:  

```
; <<>> DiG 9.8.3-P1 <<>> avarghese.me +nostats +nocomments +nocmd
;; global options: +cmd
;avarghese.me.			IN	A
avarghese.me.		1458	IN	A	192.30.252.154
avarghese.me.		1458	IN	A	192.30.252.153
```

Command:  
`dig avarghese4790.github.io +nostats +nocomments +nocmd`  

Ouput:  

```
; <<>> DiG 9.8.3-P1 <<>> avarghese4790.github.io +nostats +nocomments +nocmd
;; global options: +cmd
;avarghese4790.github.io.	IN	A
avarghese4790.github.io. 3574	IN	CNAME	github.map.fastly.net.
github.map.fastly.net.	2040	IN	CNAME	prod.github.map.fastlylb.net.
prod.github.map.fastlylb.net. 12 IN	A	151.101.44.133
```

#### My Pages  
Organization: *arvarghese*  
Landing page: *arvarghese/arvarghese.github.io* = [avarghese.me](http://avarghese.me/)  
Resume page: *arvarghese/resume* = [avarghese.me/resume](http://avarghese.me/resume)  
Travel page: *arvarghese/travel* = [avarghese.me/travel](http://avarghese.me/travel)  
This Blog: *arvarghese/blog* = [avarghese.me/blog](http://avarghese.me/blog)


<div class="img-container">
	<a target="_blank" href="http://avarghese.me/"><img class="img-travel" src="http://i.imgur.com/tHvkrGWh.jpg" alt
	="resume site"/></a>  
	<a target="_blank" href="http://avarghese.me/resume"><img class="img-travel" src="http://i.imgur.com/PF5imjLh.jpg" alt
	="landing page site"/></a>  
	<a target="_blank" href="http://avarghese.me/travel"><img class="img-travel" src="http://i.imgur.com/dwloXIXh.jpg" alt
	="travel site"/></a>  
	<a target="_blank" href="http://avarghese.me/blog"><img class="img-travel" src="http://i.imgur.com/jwpYs2zh.jpg" alt
	="blog site"/></a>  
</div>

# Reference:

+ >[Namecheap](https://www.namecheap.com/)  
+ >[Apex Domain](https://help.github.com/articles/setting-up-an-apex-domain/#configuring-an-alias-or-aname-record-with-your-dns-provider)   
+ >[Sub Domain](https://help.github.com/articles/setting-up-a-www-subdomain/)  
+ >[Namecheap and Github](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages)
