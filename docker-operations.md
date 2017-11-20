---
title: Docker operations
category: Docker
layout: 2017/sheet
prism_languages: [bash]
updated: 2017-11-20
---

## Docker for Mac

### 删除所有的镜像和容器

```bash
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker volume rm $(docker volume ls |awk '{print $2}')
rm -rf ~/Library/Containers/com.docker.docker/Data/*
```

## 参考
 * [Docker.qcow2 never shrinks - disk space usage leak in docker for mac #371](https://github.com/docker/for-mac/issues/371)
