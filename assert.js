var assert = {
  isTrue: function(check) {
    if(!check) {
      throw new Error("Assertion failed: " + check + " is not truthy")
    } else {
      console.log('GREEN: ' + check + " is truthy")
    }
  },

  isEqual: function(arg, n) {
    this.isTrue(arg === n);
  }
}
