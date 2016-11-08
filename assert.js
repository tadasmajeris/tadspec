var assert = {

  addArgument: function(arg) {
    this.assertArgument = arg;
    return this;
  },

  toEqual: function(n) {
    if(this.assertArgument === n) {
      console.log('GREEN: expected '  + n + ', and got ' + this.assertArgument)
    } else {
      throw new Error('expected ' + n + ', but got ' + this.assertArgument)
    }
  }
}

var expect = function(argument) {
  return assert.addArgument(argument);
}
