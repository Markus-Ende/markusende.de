[![Build Status](https://travis-ci.org/Markus-Ende/markusende.de.svg?branch=master)](https://travis-ci.org/Markus-Ende/markusende.de)

# Markusende.de

My personal homepage and blog. Blog data is generated from markdown files. In this way, I can utilize the full git, github and IDE tool chain to edit and create my blog posts.

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

### Generate Blog Json Data

Use `npm run transpile-blog:single` to transpile the markdown files in directory `src-blog` into the consumable json data file `src/app/blog/data/blog-data.generated.json`.

#### Watch Mode

Use `npm run transpile-blog` for watch mode. This can be run in parallel with an [Angular CLI](https://github.com/angular/angular-cli) watch commands like `ng serve` for the full watch chain experience.

## Continuous Integration & Deployment

[Travis CI](https://travis-ci.org/) is for continuous integration. The master branch continuously gets deployed to [Firebase](https://firebase.google.com/).
