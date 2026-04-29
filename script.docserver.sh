#jekyll serve

#!/usr/bin/env bash

# Load Ruby + gem paths explicitly
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
export PATH="$(ruby -r rubygems -e 'puts Gem.user_dir')/bin:$PATH"

# Run via bundler (recommended)
bundle install
bundle exec jekyll serve