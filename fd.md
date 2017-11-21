---
title: fd
category: Linux
layout: 2017/sheet
---

## fd

## Basic

### find files

Fd is a simple, fast and user-friendly alternative to find, implement with Rust.

```bash
# find markdown files on _docs folder
fd -e md `pwd`/_docs
# find file with kubernetes prefix on ~/Documents
fd '^kubernetes*' ~/Documents
```

### find files and execute command

Using fd with xargs

```bash
fd -e md -d 1 | xargs wc -l
```

Count lines number of markdown files on current directory.

## Advanced

### Usage

```bash
fd [FLAGS/OPTIONS] [<pattern>] [<path>]
```

| Express                    | Example    | Description                              |
| -------------------------- | ---------- | ---------------------------------------- |
| -d, --max-depth <depth>    | -d 3       | Set maximum search depth (default: none) |
| -t, --type <filetype>      | -t f       | Filter by type: f(ile), d(irectory), (sym)l(ink) |
| -e, --extension <ext>      | -e md      | Filter by file extension                 |
| -x, --exec <cmd>...        | -x unzip   | Execute a command for each search result |
| -E, --exclude <pattern>... | -E '^test' | Exclude entries that match the given glob pattern. |
| -c, --color <when>         | -c never   | When to use colors: never, *auto*, always |
| -j, --threads <num>        | -j 3       | Set number of threads to use for searching & executing |

## See also

- See <http://github.com/ftrvxmtrx/fd>