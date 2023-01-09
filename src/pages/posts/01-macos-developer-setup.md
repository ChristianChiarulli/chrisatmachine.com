---
layout: ../../layouts/MarkdownPostLayout.astro
title: MacOS Developer Setup
pubDate: 2022-06-18
tags: ['macOS']
---

TODO: write an introduction

## System Settings

These are some settings I immediately set:

- set caps lock to escape

- bump key repeat up by one notch

- set turn display off after 20 mins while on battery 30 mins while charging

- turn on night shift

## Finder 

There are a few tweaks to Finder that I think are necessary for it to be useable at all for a developer.

Check out this video at the timestamp provided for all of the updates: [video](https://youtu.be/2_ZbslLnshw?t=3017)

## Install brew

I like to install all of my software via a package manager and brew is the best way to do that on a mac imo.

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/chris/.zprofile

echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/chris/.zprofile

eval "$(/opt/homebrew/bin/brew shellenv)"

brew analytics off
```

## Install a terminal

I know that iterm2 is a popular choice but it doesn't have fontfallback which makes it garbage, kitty is the superior choice:

```sh
brew install kitty
```

## Install a browser

I'm not familiar with **safari** as a browser, coming from Linux I usually use **brave** or **librewolf**.

In this case I'll install **brave** and pin it to the dock and remove **safari**

```sh
brew install brave-browser
brew install librewolf
```

### Browser extensions

These are a few browser extensions I personally use:

- bitwarden
- darkreader
- vimium
- remarkable
- colorzilla
- metamask
- strike

## Chat Apps

I use a few different chat apps to interact with friends/other developers:

```sh
brew install signal  # secure chat app
brew install discord # for my community and hackathons
brew install element # chat app that uses the open matrix protocol
brew install slack   # sometimes people still use this
```


## Command Line Tools

```sh
xcode-select --install
```

## Content Creation

Again coming form Linux I don't know anything about the tools Apple provides for screen-recording, image-editing, or video-editing so I'm going to bring a few programs that I am familiar with:

```sh
brew install obs     # to record my screen
brew install gimp    # image editing
brew install blender # video editing
```

## Improving the Launcher

Spotlight sucks. Alfred sucks less. Raycast is actually pretty good.

```sh
brew install raycast
```

## Mouse

For whatever reason when you toggle natural scrolling for your mouse it affects the trackpad as well. I like to use natural scrolling for my trackpad but regular up and down for my mouse. You can use the following to achieve this:

```sh
https://pilotmoon.com/scrollreverser/
```

## Window Management

Window management on MacOS by default is abysmal. I'm extremely disappointed in it. 

For an immediate basic improvement I recommend installing **rectangle**. This program will allow you to *snap* windows to the sides of your screen, Apple should be ashamed of themselves for not including this basic functionality.

```sh
brew install rectangle
```

If you're coming from a window manager only workflow you should checkout **amethyst**. It's a half decent WM, and has a master/stack implementation.

```sh
brew install amethyst
```

## CLI utilities

These are a few CLI utilities I can't live without:

```sh
brew install tree    # allows you to see the outline of a directory 
brew install zoxide  # jump anywhere within your filesystem with z <foldername>
brew install ripgrep # blazingly fast grep
brew install fd      # blazingly fast find
```

### FZF

`fzf` gets its own section because of how useful it is

```sh
brew install fzf
$(brew --prefix)/opt/fzf/install
```

After installation you will be able to press `control-r` to interactively search history

Also you can pipe any output in to `fzf` and fuzzy search over it for example:

```sh
brew list | fzf
```

## skhd

Because mac apparently can't do any of the basics right, you will need to install a program for launching programs. 

The only one I was able to find is **skhd**, it works well enough.

```sh
brew install koekeishiya/formulae/skhd
brew services start skhd
```

Here is an example command you can set in `~/.config/skhd/skhdrc` to open **kitty** with `cmd+enter`:

```
cmd - return : /Applications/kitty.app/Contents/MacOS/kitty --single-instance -d ~
```

## Terminal System Monitors

```sh
brew install htop
brew install glances
brew install lazygit
```

## Android Integration

I don't use an iPhone, currently using GrapheneOS. This helps transfer files.

```sh
brew install syncthing
brew install android-file-transfer
```

## Web Tools

Some tools I use for interacting with the web.

```sh
brew install insomnia
brew install wget
brew install httpie
brew install jq
brew install ngrok
npm -g live-server
```

## Documentation

It's nice to have examples for commands

```sh
brew install tldr
```

## 2FA

```sh
brew install authy
```

## Music

I don't have time to pirate music anymore

```sh
brew install spotify
```

## Programming Languages

Here is how I install and setup various programming languages I use.

### Python

btw **python 2** isn't even included in MacOs anymore.

```sh
echo "alias python=/usr/bin/python3" >> ~/.zshrc
echo "alias pip=/usr/bin/pip3" >> ~/.zshrc
```

Install miniforge for apple silicon:

```sh
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-arm64.sh -O ~/miniforge.sh

sh ~/miniforge.sh -b -f -p  $HOME/.miniforge

rm ~/miniforge.sh

```

Add the following in your `.zshrc` file:

```sh
if [ -f "$HOME/.miniforge/etc/profile.d/conda.sh" ]; then
      . "$HOME/.miniforge/etc/profile.d/conda.sh"
  else
      export PATH="$HOME/.miniforge/bin:$PATH"
fi
```

Open up a new terminal and the `conda` command should be available, if you don't want to activate the `base` environment run the following:

```sh
conda config --set auto_activate_base false
```

### Java

I use **sdkman** to manage **java** and all things JVM based.

```sh
curl -s "https://get.sdkman.io" | bash

sdk install java
```

### Node

**fnm** is better than **nvm**, both are better than just installing node and running into endless permission issues.

```sh
brew install fnm

echo '"$(fnm env --use-on-cd)"' >> /Users/chris/.zprofile

fnm install 17
```

### Rust

This should be all you need to install rust.

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Go

This should be all you need to install go.

```sh
brew install go
```

I hate that they put a `go` directory right in my home directory. I personally change the `GOPATH` like this:

```sh
export GOPATH=$HOME/.local/share/go
export PATH=$HOME/.local/share/go/bin:$PATH
```

then remove the other one:

```sh
sudo rm -rf ~/go
```

## Install Neovim

Neovim is my text editor of choice

I install Neovim from source you can probably just: 

```sh
brew install neovim
```

If building from source:

```sh
brew install ninja libtool automake cmake pkg-config gettext curl
```

```sh
mkdir ~/Repos
cd ~/Repos
```

```sh
git clone https://github.com/neovim/neovim.git
cd neovim
git checkout release-0.8
make CMAKE_BUILD_TYPE=Release
sudo make install
```

```sh
pip install pynvim
npm -g install neovim
```

### Install Lunarvim

The best IDE layer for Neovim:

```sh
bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)
brew install stylua
```

## Rosetta

Rosetta will allow you to run software compiled for x86_64 architecture on Apple silicon.

```sh
softwareupdate --install-rosetta
```

I'm not really sure if this works yet since I get a weird error, but maybe you'll have more luck:

```
Package Authoring Error: 012-40509: Package reference com.apple.pkg.RosettaUpdateAuto is missing installKBytes attribute
```

## Docker

Follow the instructions at the following link to install docker desktop for Apple silicon.

- [docker desktop](https://docs.docker.com/desktop/install/mac-install/)

```sh
brew install lazydocker
```

Make sure to stop docker desktop after installing and set it to not auto-start since it is pretty resource hungry.

## Github CLI

Very convenient CLI utility if you use Github

```sh
brew install gh
gh auth login
```

## Install my dotfiles

```sh
brew install stow
git clone https://github.com/ChristianChiarulli/Machfiles.git
```


## Nerd fonts

```sh
brew install fontconfig
```

**kitty** has font fallback so you can install whatever font you want as long as you have one installed that supports nerd icons

```sh
brew tap homebrew/cask-fonts && brew install --cask font-jetbrains-mono-nerd-font
```

Useful gist for install fonts: [font gist](https://gist.github.com/davidteren/898f2dcccd42d9f8680ec69a3a5d350e)

You can also download your own fonts and place them in `~/Library/Fonts`

For instance try installing [Cascadia Code](https://github.com/microsoft/cascadia-code/releases/tag/v2111.01)
