# "Battle of the (Brain-Model-Mapping) Metrics" (BotBM3) Collaboration Website

## User Guide

This website is built using Jekyll and GitHub Pages. The primary content across the pages is controlled by the markdown files in the root directory of this repository. The layout of the pages is controlled by HTML files in the `_layouts` directory. The styling of the pages is controlled by the CSS files in the `_sass` or `assets/css` directory. Images and other assets are stored in the `assets` directory.

To edit page layout (including which pages are seen in which order, you can modify the *navigation* header in the `_config.yml` file. The landing page is controlled by the `index.md` file. Other pages are controlled by the markdown files (e.g. `whatisthis.md`) in the root directory.

Generally, if you need only to modify text or image content, you can use your IDE's markdown preview feature. If you want to see the effect of any changes, you'll need to run Jekyll locally on our machine. (More details on installation may be found in [setup](./setup)).

Once you've installed Jekyll, you can run the following command in the root directory of this repository to see the website locally:

(First, if you haven't already, run the gem installer):

```bash
gem install webrick bundler
gem install jekyll
```

Then, the run the following command.

```bash
bundle exec jekyll clean
bundle exec jekyll serve --port 4000
```

If you modify page layout (e.g. which pages are linked from the landing page), you might (on occassion) need to restart your jekyll server. To do this, simply stop the server **(Ctrl+C)** and re-run the clean and serve commands above.

To facilitate the process of restarting the server after these kinds of updates, you can source (from the repo root directory) the following script to load a `restart_jekyll` command:

```zsh
source helpers.sh
restart_jekyll
```

You can also add this script to your `.zshrc` or `.bashrc` file to have it available in every terminal session.

```zsh
echo '[[ -f helpers.zsh ]] && source helpers.zsh' >> ~/.zshrc
```

## Template

The template for this website is a minimal modification of the github.io page for [NeurIPS2020 TDA-in-ML Workshop](https://github.com/tda-in-ml/tda-in-ml.github.io/tree/master).<br>We are grateful to these authors for open-sourcing their material and design!

## Licence

The code of this theme is licensed under a BSD 3-Clause licence. Please see the file `LICENSE` for more information. The assets of this theme,
i.e. all images and logos, are licensed under a [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/) licence. Please acknowledge either the authors (see `AUTHORS` file) or this repository when re-using an asset.

## AI Usage

Some of the imagery for this website was generated with help from Generative AI, including [ChatGPT / DallE-3](https://chat.openai.com/chat).