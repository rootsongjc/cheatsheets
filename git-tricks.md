---
title: Git tricks
category: DevOps
layout: 2017/sheet
prism_languages: [go, bash]
updated: 2018-01-31
---

## Basic

{:.-three-column}

### Commit

```bash
git commit -m "message"
# change the message of the last commit
git commit --amend
```

See <https://segmentfault.com/q/1010000000761908>

### Refs

```bash
HEAD^       # 1 commit before head
HEAD^^      # 2 commits before head
HEAD~5      # 5 commits before head
```

### Branches

```bash
# create a new branch
  git checkout -b $branchname
  git push origin $branchname --set-upstream

# get a remote branch
  git fetch origin
  git checkout --track origin/$branchname

# delete local remote-tracking branches (lol)
  git remote prune origin

# list merged branches
  git branch -a --merged

# delete remote branch
  git push origin :$branchname
```

### Collaboration

```bash
# Rebase your changes on top of the remote master
  git pull --rebase upstream master
  
# Squash multiple commits into one for a cleaner git log
# (on the following screen change the word pick to either 'f' or 's')
  git rebase -i $commit_ref
  
# Force update upstream
  git push -f origin master
```

### Submodules

```bash
# Import .gitmodules
  git submodule init

# Clone missing submodules, and checkout commits
  git submodule update --init --recursive

# Update remote URLs in .gitmodules
# (Use when you changed remotes in submodules)
  git submodule sync
```

### Diff

#### Diff with stats

    git diff --stat
    app/a.txt    | 2 +-
    app/b.txt    | 8 ++----
    2 files changed, 10 insertions(+), 84 deletions(-)

#### Just filenames

```bash
git diff --summary
```

### Log options

```bash
--oneline
  e11e9f9 Commit message here

--decorate
  shows "(origin/master)"

--graph
  shows graph lines

--date=relative
  "2 hours ago"
```

## Misc

{:.-three-column}

### Cherry pick

```bash
git rebase 76acada^
```

### Misc

```bash
# get current sha1 (?)
  git show-ref HEAD -s

# show single commit info
  git log -1 f5a960b5

# Go back up to root directory
  cd "$(git rev-parse --show-top-level)"
```

### Short log

```bash
 $ git shortlog
 $ git shortlog HEAD~20..    # last 20 commits

 James Dean (1):
     Commit here
     Commit there

 Frank Sinatra (5):
     Another commit
     This other commit
```

### Bisect

```bash
git bisect start HEAD HEAD~6
git bisect run npm test
git checkout refs/bisect/bad   # this is where it screwed up
git bisect reset
```

### Manual bisection

```bash
git bisect start
git bisect good   # current version is good

git checkout HEAD~8
npm test          # see if it's good
git bisect bad    # current version is bad

git bisect reset  # abort
```

### Searching

```bash
git log --grep="fixes things"  # search in commit messages
git log -S"window.alert"       # search in code
git log -G"foo.*"              # search in code (regex)
```

### Sync upstream

```bash
# see local branch
git remote -v
# add remote branch
git remote add upstream https://github.com/k8smeetup/kubernetes.github.io.git
git fetch upstream
git checkout master
git merge upstream/master
```

### Discard file changes

```bash
git checkout -- <badfile>
```
### Mirroring a repository

```bash
# create a bare clone of the repository
git clone --bare https://github.com/exampleuser/old-repository.git
# mirror-push to the new repository
git push --miror https://github.com/exampleuser/new-repository.git
# remove the temporary local repository
cd ..
rm -rf old-repository
```

### No-password git push

```bash
vim .git-credentials
https://{username}:{password}@github.com
git config --global credential.helper store
```