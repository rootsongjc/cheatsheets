---
title: Jenkins
category: DevOps
updated: 2017-12-25
layout: 2017/sheet
---

## Jenkins

## On Mac

### Basic

#### Stop Jenkins

```bash
sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist
```

#### Start Jenkins

```bash
sudo launchctl load /Library/LaunchDaemons/org.jenkins-ci.plist
```

#### Upgrade Jenkins

```bash
mv jenkins.war /Applications/Jenkins/jenkins.war
```

Download the latest `jenkins.war` and move it to the Jenkins installation folder.

## Docker

#### Start Jenkins

```bash
docker run -d -p 8080:8080 -p 5000:5000 --name jenkins -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts
```

Admin's password location at `/var/lib/docker/volumes/jenkins_home/_data/secrets/initialAdminPassword`.

For more information, see https://github.com/jenkinsci/docker/blob/master/README.md

## See also

- See <https://jenkins.io>