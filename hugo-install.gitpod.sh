#! /bin/bash

curl -s https://api.github.com/repos/gohugoio/hugo/releases/latest \
 | grep  browser_download_url \
 | grep Linux-64bit.deb \
 | grep -v extended \
 | cut -d '"' -f 4 \
 | wget -i -

sudo dpkg -i ./hugo*_Linux-64bit.deb

sudo mv /usr/local/bin/hugo /usr/bin

rm -rf ./hugo*.deb