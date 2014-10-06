# css-class-concat
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Concatenate css classes into a single string, and remove all prepending class
dots. Preps strings to be used within html tags.

## Installation
```bash
npm install css-class-concat
```

## Usage
```js
var classConcat = require('css-class-concat');

classConcat(['.foo', 'bar', 'barre', '.bazze-foo']);
// => 'foo bar barre bazze-foo'
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/css-class-concat.svg?style=flat-square
[npm-url]: https://npmjs.org/package/css-class-concat
[travis-image]: https://img.shields.io/travis/yoshuawuyts/css-class-concat.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/css-class-concat
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/css-class-concat.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/css-class-concat?branch=master
[downloads-image]: http://img.shields.io/npm/dm/css-class-concat.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/css-class-concat
