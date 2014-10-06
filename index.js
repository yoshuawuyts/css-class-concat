/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Expose `concat()`.
 */

module.exports = concat;

/**
 * Concatenate css classes into
 * a single string.
 *
 * @param {String[]} arr
 * @return {String}
 * @api public
 */

function concat(arr) {
  assert(Array.isArray(arr), 'css-class-concat: arr should be an array of strings');

  return arr.reduce(function(prev, curr, i) {
    return prev + curr.replace(/(\.)/g, '') + (arr.length - 1 == i ? '' : ' ');
  }, '');
}
