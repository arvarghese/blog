---
layout: post
title:  "Setting Up a Custom Domain"
date:   2016-10-09 12:00:00 -0500
author: "Arun Varghese"
category: development
tags: [dns,domain]
---

### Setting Up a Custom Domain Using [Namecheap](https://www.namecheap.com/) && [Github](https://github.com/)

As you may or may not know, when you create a github account, you also get one site  


`A record, host=@ value=192.30.252.153`  
`A record, host=@ value=192.30.252.153`  
`CNAME record, host=www value=avarghese4790.github.io`  

`dig vararun.tech +nostats +nocomments +nocmd`  
`dig avarghese4790.github.io +nostats +nocomments +nocmd`

# Reference:

+ >[Namecheap](https://www.namecheap.com/)  
+ >[Apex Domain](https://help.github.com/articles/setting-up-an-apex-domain/#configuring-an-alias-or-aname-record-with-your-dns-provider)   
+ >[Sub Domain](https://help.github.com/articles/setting-up-a-www-subdomain/)  
+ >[Namecheap and Github](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages)
+ >[Namecheap and Github](http://davidensinger.com/2013/03/setting-the-dns-for-github-pages-on-namecheap/)  
