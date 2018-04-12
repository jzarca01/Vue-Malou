# Vue-Malou

[![npm](https://img.shields.io/npm/v/my-awesome-plugin.svg)](https://www.npmjs.com/package/my-awesome-plugin) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> La congolexicomatisation des lois du marché propres aux congolais dans un plugin Vue.js

## Installation

```bash
npm install --save vue-malou
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueMalou from 'vue-malou'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader

Vue.use(VueMalou)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="my-awesome-plugin/dist/my-awesome-plugin.css"></link>
<script src="my-awesome-plugin/dist/my-awesome-plugin.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/my-awesome-plugin/dist/my-awesome-plugin.css"></link>
<script src="https://unpkg.com/my-awesome-plugin"></script>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
