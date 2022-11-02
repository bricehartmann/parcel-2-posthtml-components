# Parcel 2 - PostHTML Components

## Overview

This repository is a proof of concept for using the following together for locally developing a static website:
* [Docker](https://www.docker.com/)
    * and Docker-Compose
* [Parcel 2](https://parceljs.org/)
    * with [SCSS](https://parceljs.org/languages/sass/)
* [PostHTML](https://posthtml.org/)
* [PostHTML Components](https://thewebartisan7.github.io/posthtml-components/)

## Getting started
1. Ensure you have Docker and Docker-Compose installed
2. Clone the project repository
3. From within the project directory, run `docker-compose up`

## Usage
* NPM commands can be run using `.local/npm <arguments>`
    * e.g. `.local/npm run build`
* NPX commands can be run using `.local/npx <arguments>`
* Any file name listed in `.local/copy-on-build.txt` will be copied to the resulting `dist/` folder after building
   * This is useful for unreferenced files such as `robots.txt`

## Under the hood
A custom file watcher exists at `.local/watcher.js` to watch for file changes within the `src/layouts` and `src/components`
directories and trigger rebuilds whenever something changes.

See this issue: https://github.com/thewebartisan7/posthtml-components/issues/19
