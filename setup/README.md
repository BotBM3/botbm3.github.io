# Run Webpage on Local Dev Server:

## Instructions for MacOS

### Installing Ruby + Jekyll

- [With Homebrew](https://jekyllrb.com/docs/installation/macos/) (Recommended)
- [Maybe with Anaconda?](https://s-canchi.github.io/2021-04-30-jekyll-conda/)
- [Installing Ruby via Chruby](https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/#start-here-if-you-choose-the-long-and-manual-route)
  
### Running Local Server

```zsh
gem install webrick bundler
gem install jekyll
bundle exec jekyll clean
bundle exec jekyll serve --port 4000 --livereload
```

### Simplifying the Restart Process

To simplify restarting the server after modifying page layout, you can source the following script to load a `restart_jekyll` command:

(From the repo root directory):

```zsh
source helpers.sh
restart_jekyll
```

(...after closing the server with Ctrl+C)

You can also add this script to your `.zshrc` or `.bashrc` file to have it available in every terminal session.

```zsh
echo '[[ -f helpers.zsh ]] && source helpers.zsh' >> ~/.zshrc
```
    
