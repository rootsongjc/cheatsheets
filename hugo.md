---
title: Hugo
category: Hugo
layout: 2017/sheet
prism_languages: [bash]
updated: 2017-11-20
---
## Hugo

## Quick start

### Create a new site

```bash
hugo new site rootsongjc-hugo
```

### Create a new page

```bash
hugo new posts/cheatsheets.md
```

This will create a new file on `contents/posts/cheatsheets.md`.

### Build site

```bash
hugo
```

Your site files located on `public` folder.

### Debug

```
hugo server
```

Debug your site on http://localhost:4001. Any file changed will lead to website live update.

## Reference

- [Hugo official website](https://gohugo.io)