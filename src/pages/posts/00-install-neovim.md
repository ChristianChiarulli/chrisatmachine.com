---
layout: ../../layouts/MarkdownPostLayout.astro
title: Neovim Different Installation Methods Pros & Cons
pubDate: 2022-07-01
tags: ["neovim"]
---

I'm going to show you 3 different ways to install Neovim. Most of you are likely just using whatever package manager you have available, but there are some good reasons to use the other methods as well.

## Method #1: Package Manager

This is likely the way most people are going to install Neovim. Package managers handle choosing the version for you, updating, upgrading and etc. They abstract away all of the details and will be the *easiest* way to install most things.

Some good reasons to not use your package manager are: not wanting to update/upgrade while updating the rest of your packages. Or conversely you may want to use the latest(nightly) version to try out new features.

**Install**:

  - Arch Linux:
    - `sudo pacman -S neovim`

  - Debian(Ubuntu):
    - `sudo apt install neovim`

  - Mac:
    - `brew install neovim`

**Uninstall**:

  - Arch Linux:
    - `sudo pacman -R neovim`

  - Debian(Ubuntu):
    - `sudo apt uninstall neovim`

  - Mac:
    - `brew uninstall neovim`

**NOTE** You could technically ignore a package from being upgraded via your package manager, for instance: [with pacman](https://ostechnix.com/safely-ignore-package-upgraded-arch-linux/)
### Recap

pros:
  - easy
  - handles updates/upgrades

cons:
  - updates/upgrades potentially when you don't want
  - likely doesn't have the latest nightly build

## Method #2: AppImage

**Install**:

  ```
  curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage

  mv nvim.appimage nvim

  chmod u+x nvim

  sudo mv nvim /usr/local/bin

  nvim
  ```

**Uninstall**:

  ```
  sudo rm /usr/local/bin/nvim
  ```

Using an AppImage is a great option provided you are on a relatively up to date Linux distro. 

Note the `latest` in the **URL**. If you would to install a particular version you will need to change it to the corresponding tag.

Example:

  ```
  curl -LO https://github.com/neovim/neovim/releases/download/v0.7.2/nvim.appimage
                                                              ^^^^^^
  ```

### Recap

pros:
  - install any version you want
  - note need to compile
  - no worrying about unwanted updates/upgrades

cons:
  - Will only work on newer Linux Distros

## Method #3: From source

This method is the most complicated, but will work cross-platform, and give you the most control. This will give you the ability to checkout any branch that you want and install. You even have the option to change some of the code if you want.

**Install**:

  ```
  git clone https://github.com/neovim/neovim.git

  cd neovim

  make CMAKE_BUILD_TYPE=Release

  sudo make install
  ```

This will install the latest nightly version by default. If you would like to install a different version you will need to check it out before compiling and installing.

**Example:**:

  ```
  git clone https://github.com/neovim/neovim.git

  cd neovim

  git checkout release-0.7 
  # git checkout v0.7.2 # by tag

  make CMAKE_BUILD_TYPE=Release

  sudo make install
  ```

**NOTE** If you are using this method to keep up with nightly on master make sure to `git pull` before re-installing.

**Uninstall**:

  ```
  sudo rm /usr/local/bin/nvim
  sudo rm -r /usr/local/share/nvim/
  ```

### Recap

pros:
  - you are in complete control
  - cross-platform
  - chance to learn how the source code works

cons:
  - most complicated solution
  - may forget to `git pull` when installing nightly

## Resources

- [r/Neovim install wiki](https://github.com/neovim/neovim/wiki/Installing-Neovim)

