var assert = {

  addArgument: function(arg) {
    this.assertArgument = arg;
    return this;
  },

  addDescription: function(string) {
    this.description = string + ": ";
  },

  addTestDescription: function(string) {
    this.testDescription = string;
  },

  toEqual: function(n) {
    if(this.assertArgument === n) {
      console.log(this.description + this.testDescription + " - GREEN: expected '"  + n + "', and got '" + this.assertArgument + "'")
    } else {
      throw new Error(this.description + this.testDescription + " - expected '" + n + "', but got '" + this.assertArgument + "'")
    }
  },

  toBeEmpty: function() {
    if(this.assertArgument.length === 0) {
      console.log(this.description + this.testDescription + " - GREEN: expected '"  + this.assertArgument + "' to be empty, and it was!")
    } else {
      throw new Error(this.description + this.testDescription + " - expected '" + this.assertArgument + "' to be empty.")
    }
  }
}

var expect = function(argument) {
  return assert.addArgument(argument);
}

var describe = function(description, funct){
  assert.addDescription(description);
  funct();
}

var it = function(description, funct){
  assert.addTestDescription(description);
  funct();
}
