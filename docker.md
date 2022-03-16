---
title: Docker CLI
category: Docker
layout: 2017/sheet
---

Docker
-------------

## Basic

### Build image

```bash
docker build -t registry/repo:tag .
```

Create an `image` from a Dockerfile.

### Push image

```bash
docker push -t reigstry/repo:tag
```

### Run container

On daemon

```bash
docker run -d -p LOCAL_PORT:CONTAINER_PORT -v LOCAL_DIR:CONTAINER_DIR -e ENV=somthing registry/repo:tag
```

### Auto completion

Add docker plugin to `~/.oh-my-zsh/plugins/docker/_docker` and check `~/.zshrc`

```bash
plugins=(git 
docker
)
fpath+=($ZSH/plugins/docker)
autoload -U compinit && compinit
```

See [stackoverflow](https://stackoverflow.com/questions/37428133/zsh-docker-plugin-not-working) and [docker docs](https://docs.docker.com/compose/completion/#zsh)

Containers
-----------------

### Interact with container

```bash
docker exec -it CONTAINER_NAME_OR_ID /bin/bash 
```

Run commands in a `container`.

### Automatically remove the container when it exits

```bash
docker run -rm -it registry/repo:tag /bin/bash
```

Images
------

### Manage images

```bash
$ docker images
  REPOSITORY   TAG        ID
  ubuntu       12.10      b750fe78269d
  me/myapp     latest     7b2431a8d968
```

```bash
$ docker images -a   # also show intermediate
```

Manages `image`s.

### Remove container

```bash
docker rmi CONTAINER_ID_OR_NAME
```

Deletes `image`s.

### Export and import image

```bash
docker save imagename > imagename.tar
docker load -i imagename.tar
```

Also see
--------

 * [Getting Started](http://www.docker.io/gettingstarted/) _(docker.io)_
