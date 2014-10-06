/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var concat = require('./index');

/**
 * Test
 */

describe('css-class-concat', function() {
  it('should assert argument types', function() {
    concat.bind(concat, 'foo')
      .should.throw('css-class-concat: arr should be an array of strings');

    concat.bind(concat, ['foo', 'bar'])
      .should.not.throw('css-class-concat: arr should be an array of strings');
  });

  it('should concatenate classes', function() {
    concat(['foo', 'bar', 'baz'])
      .should.eql('foo bar baz');
  });

  it('should remove prepending dots', function() {
    concat(['.foo', 'bar', '.baz-ba'])
      .should.eql('foo bar baz-ba');
  });
});
