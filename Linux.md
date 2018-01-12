---
title: Linux
category: Linux
layout: 2017/sheet
---

### Processes management

Look up zombie processes.

```bash
　ps -A -o stat,ppid,pid,cmd | grep -e '^[Zz]'
```