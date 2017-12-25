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

## See also

- See <https://jenkins.io>