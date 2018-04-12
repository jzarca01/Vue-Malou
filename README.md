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

<vue-malou paragraphs="2" sentences="3"></vue-malou>
```

### License

[MIT](http://opensource.org/licenses/MIT)
