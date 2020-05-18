#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run demo

# navigate into the build output directory
cd docs

git init
git add -A
git commit -m "Deploy"

git push -f git@github.com:yogakurniawan/vue-tel-input-vuetify.git master:gh-pages

cd -
