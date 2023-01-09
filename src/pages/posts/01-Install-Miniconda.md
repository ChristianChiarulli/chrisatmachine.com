---
layout: ../../layouts/MarkdownPostLayout.astro
title: How to install Miniconda
pubDate: 2022-06-18
tags: ["python"]
---


This guide will show you how to install the latest version of Miniconda. Miniconda is a lightweight version of Anaconda: a virtual environment manager for Python.

## Download Install Script

### Linux

```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh
```

### Mac

```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh -O ~/miniconda.sh
```

## Install Minconda

```
sh ~/miniconda.sh -b -f -p  $HOME/.miniconda

rm ~/miniconda.sh
```

## Setting up your shell

If you don't want the conda base environment (you may not want this because as of now there are conflicts with later versions of Python and npm)

```
conda config --set auto_activate_base false
```

**NOTE:** If you don't have the `conda` command available then enter the following in your `.bashrc` or `.zshrc` file:

```
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$("$HOME/.miniconda/bin/conda" 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "$HOME/.miniconda/etc/profile.d/conda.sh" ]; then
        . "$HOME/.miniconda/etc/profile.d/conda.sh"
    else
        export PATH="$HOME/.miniconda/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

The first time you run it, it'll create a ./condarc in your home directory with that setting to override the default.

Now you can initialize your shell with the following command:

```
conda init <shell>
```

Currently available shells are:
  - bash
  - fish
  - powershell
  - tcsh
  - xonsh
  - zsh


Now close your terminal and open a new one and your conda environment should be fully configured.
