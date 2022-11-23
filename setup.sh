#! /bin/bash

# Get the hugo binary
wget https://github.com/gohugoio/hugo/releases/download/v0.106.0/hugo_0.106.0_linux-amd64.deb

# Install the hugo binary
sudo apt install ./hugo_0.106.0_linux-amd64.deb

# Remove the hugo binary
rm hugo_0.106.0_linux-amd64.deb