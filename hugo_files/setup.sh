#! /bin/bash

# Get the hugo binary
wget https://github.com/gohugoio/hugo/releases/download/v0.108.0/hugo_extended_0.108.0_linux-amd64.deb

# Install the hugo binary
sudo apt install ./hugo_extended_0.108.0_linux-amd64.deb

# Remove the hugo binary
rm hugo_extended_0.108.0_linux-amd64.deb