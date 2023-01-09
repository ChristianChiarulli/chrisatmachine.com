---
layout: ../../layouts/MarkdownPostLayout.astro
title: Install Multiple Versions of Java with SDKMAN
pubDate: 2021-03-12
tags: ["java"]
---

## What is SDKMAN?

SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits. This is very useful for managing Java versions as well as Gradle, Maven etc..

## Installation

Open up a terminal and enter:

```
curl -s "https://get.sdkman.io" | bash
```

This will add the following to your `.bashrc` or `.zshrc`:

```
#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="/home/chris/.sdkman"
[[ -s "/home/chris/.sdkman/bin/sdkman-init.sh" ]] && source "/home/chris/.sdkman/bin/sdkman-init.sh"
```

Now you can open a new terminal and run the following to confirm installation:

```
sdk version
```

## Install to a custom location

You can install to a custom location with the following command:

```
export SDKMAN_DIR="/usr/local/sdkman" && curl -s "https://get.sdkman.io" | bash
```

## Using SDKMAN

SDKMAN will allow you to install a lot of different programs.

### List all options to install

```
sdk ls
```

## Installing Java

Install default version:

```
sdk install java
```

Find a specific version:

```
sdk ls java
```

Install a specific version based on identifier from list:

```
sdk install java 11.0.12-open
```

Using a specific version:

```
sdk use java 11.0.12-open
```

Default a specific version:

```
sdk default java 11.0.12-open
```

To update sdkman:

```
sdk update
```

**NOTE** All of the above commands will work for the other programs available such as:

- gradle
- maven
- groovy
- kotlin
- spark
- springboot

## Getting help

```
sdk help
```

## Optional Configuration

In `~/.sdkman/etc/config`

```
sdkman_auto_answer=false
sdkman_auto_complete=true
sdkman_auto_env=false
sdkman_auto_update=true
sdkman_beta_channel=false
sdkman_checksum_enable=true
sdkman_colour_enable=true
sdkman_curl_connect_timeout=7
sdkman_curl_max_time=10
sdkman_debug_mode=false
sdkman_insecure_ssl=false
sdkman_rosetta2_compatible=false
sdkman_selfupdate_feature=true
```

## References

[SDKMAN!](https://sdkman.io/)
