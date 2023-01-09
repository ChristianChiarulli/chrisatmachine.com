---
layout: ../../layouts/MarkdownPostLayout.astro
title: Changing remote Git repo
pubDate: 2020-07-18
tags: ["git"]
---

## List current remote

```
git remote -v
```

## Change remote Git repo

```
git remote set-url origin git@<your.git.repo.example.com>:<user>/<repository2.git>
```

(**NOTE**)

Replace everything inside `<>` with your data and remove the `<>` characters
