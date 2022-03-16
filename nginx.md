---
title: nginx
layout: 2017/sheet
updated: 2017-11-25
---

## nginx

## Basic

### Install

On Mac

```bash
brew install nginx
```

Docker

```bash
docker pull nginx
```

### Configuration

On Mac

```bash
vim /usr/local/etc/nginx/nginx.conf
```

and change the:

```ini
server {
    listen       8080;
    server_name  localhost;

    #access_log  logs/host.access.log  main;

    location / { 
        root   /opt/local/www; # website file location
        index  index.html index.htm;
    }
```

