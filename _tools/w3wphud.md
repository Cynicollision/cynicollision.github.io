---
title: w3wpHUD
year: 2016
description: A Visual Studio extension that shows IIS worker process IDs at a glance.
tech: C#
image: /assets/images/w3wphud.png
image_alt: "w3wpHUD: a Visual Studio tool window listing two IIS worker processes and their application pools"
links:
  - label: Visual Studio Marketplace
    url: https://marketplace.visualstudio.com/items?itemName=Cynicollision.w3wpHUD
  - label: Source
    url: https://github.com/Cynicollision/w3wpHUD
redirect_from: /w3wphud/
---

My first and only Visual Studio extension. It shows the process IDs of running Internet Information Services (IIS) worker processes right in the IDE, by wrapping the `appcmd list wp` command and displaying its output.

It's useful when you're running several w3wp.exe processes, resetting IIS often, and need to know which process to attach the debugger to.
