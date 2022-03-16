---
title: Docker operations
category: Docker
layout: 2017/sheet
prism_languages: [bash]
updated: 2017-12-15
---
## Docker operations

## Docker for Mac

### Delete all images and containers

```bash
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker volume rm $(docker volume ls |awk '{print $2}')
rm -rf ~/Library/Containers/com.docker.docker/Data/*
```

Restart docker after that.

## Network

### Delete docker0 bridge network

```bash
ifconfig docker0 down
brctl delbr docker0
```

The next time you start docker daemon, this network will be recreated.

## Reference

 * [Docker.qcow2 never shrinks - disk space usage leak in docker for mac #371](https://github.com/docker/for-mac/issues/371)
