---
layout: ../../layouts/MarkdownPostLayout.astro
title: Neovim IDE Crash Course
date: 2022-06-18
tags: ["neovim"]
---

This article is a companion and explanation for this repository: [repo](https://github.com/LunarVim/nvim-basic-ide)

## Important Directories

- nvim: `~/.config/nvim`:

This is where your config lives

- share: `~/.local/share`

You will find plugins here under: `~/.local/share/nvim/site/pack/packer`
You will also find other useful plugin data

- cache: `~/.cache`

You can find logs here

- state: `~/.local/state`

You can find state about Neovim as well as other plugins here

## Concepts and Terminology

### LSP

LSP stands for Language Server Protocol. 

It provides: 

- Completions
- Diagnostics
- (GOTO Definition, Find References etc..)
- Code actions
- Autoimport
- Sometimes formatters

For a full explanation: [Docs](https://microsoft.github.io/language-server-protocol/overviews/lsp/overview/)

### Formatters

Formatters help keep a consistent style across your codebase 

Examples include: prettier, black, stylua

### Linters

Linters add extra diagnostics in addition to your language server, often they will provide stylistic suggestions

Examples include: eslint, flake8, shellcheck

### Treesitter

Treesitter at basic level provides **syntax highlighting** and **indentation** 

But also provides *much* more: [docs](https://tree-sitter.github.io/tree-sitter/)

## Config Structure

The config structure is relatively simple

- `init.lua`: the entry point for your config

- `lua/`: the directory where all of your lua code and plugin config goes

- `lua/user`: a namespace to avoid collisions with other plugins and lua modules

- `lua/user/lsp`: lsp is complicated enough to warrant it's own separate directory

- `lua/user/lsp/settings`: specific settings for your Language Server, to find more settings for your language server read more [here](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md)

```
.nvim/
├── init.lua
├── lua
│   └── user
│       ├── alpha.lua
│       ├── autocommands.lua
│       ├── autopairs.lua
│       ├── bufferline.lua
│       ├── cmp.lua
│       ├── colorscheme.lua
│       ├── comment.lua
│       ├── dap.lua
│       ├── gitsigns.lua
│       ├── illuminate.lua
│       ├── impatient.lua
│       ├── indentline.lua
│       ├── keymaps.lua
│       ├── lsp
│       │   ├── handlers.lua
│       │   ├── init.lua
│       │   ├── lsp-installer.lua
│       │   ├── null-ls.lua
│       │   └── settings
│       │       ├── pyright.lua
│       │       └── sumneko_lua.lua
│       ├── lualine.lua
│       ├── nvim-tree.lua
│       ├── options.lua
│       ├── plugins.lua
│       ├── project.lua
│       ├── telescope.lua
│       ├── toggleterm.lua
│       └── treesitter.lua
└── README.md
```

## Making Changes

- Options: you can add/change options [here](https://github.com/LunarVim/nvim-basic-ide/blob/master/lua/user/options.lua)

- Keymaps: you can add/change keymaps [here](https://github.com/LunarVim/nvim-basic-ide/blob/master/lua/user/keymaps.lua)

- Adding a Language Server:

First Enter:

```
:LspInstallInfo
```
and press `i` on the Language Server you wish to install

Next you will need to add the server to this list: [servers](https://github.com/LunarVim/nvim-basic-ide/blob/8b9ec3bffe8c8577042baf07c75408532a733fea/lua/user/lsp/lsp-installer.lua#L6)

- Adding Formatters and linters

Make sure the **formatter** or **linter** is installed and add it to this setup function: [null-ls](https://github.com/LunarVim/nvim-basic-ide/blob/8b9ec3bffe8c8577042baf07c75408532a733fea/lua/user/lsp/null-ls.lua#L13)

**NOTE** Some are already setup as examples, remove them if you want

## Adding Plugins

You can add your plugins [here](https://github.com/LunarVim/nvim-basic-ide/blob/master/lua/user/plugins.lua#L42)

Notice that all of the included plugins are *pinned* to a particular commit. This is to maintain stability, feel free to unpin or pin to a newer version if you want.

## Stability

I have noticed many Neovim users complain about the stability of Neovim and it's plugin ecosystem. If you regularly update your plugins and keep up with the latest Neovim version then you have probably deal with breaking changes fairly often. 

Instead of updating daily/weekly etc.. I recommend keeping your config stable and updating once every few months, or whenever there is a new feature you'd like to test out. The best way I have found to do this is to: 

1. pin your commits when your config is working without bugs and 
2. Install Neovim from source so that it doesn't update when you update packages using your package manager.

## Neovim Releases

You can find the latest released version of Neovim [here](https://github.com/neovim/neovim/releases)

There are instructions in the `README` explaining how to install the version of Neovim you want [here](https://github.com/LunarVim/nvim-basic-ide)

## Resources

- [r/Neovim](https://www.reddit.com/r/neovim/)

- [Awesome Neovim](https://github.com/rockerBOO/awesome-neovim)
