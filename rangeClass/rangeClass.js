/**
* Build a class to represent a range of numbers, modeled after Ruby's "range" class, that takes:
*   - a beginning index,
*   - an end index (optional)
*   - a 'step' (optional) 
*     The step is the interval at which elements are included.
*     For instance, a step of 1 includes every element in the range, 
*     while a step of 2 includes every other element.
*
* The range should have a constructor that accepts these arguments in that order.
* 
* It should also support the following utility functions:
*   - size(): return the number of items represented by the range
*   - each(callback(index)): iterate over the array, passing each value to a callback function
*   - includes(index): return whether or not the range includes the passed value
*
* You should also be aware of the following caveats:
*   - You should allow a negative value for 'step' to count backwards.
*     If no step is provided and the start is more than the end, assume we're counting backwards.
*   - Should throw an exception if we are given no 'start' value.
*
* USAGE EXAMPLES:
* var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
*
* var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
* evenNumbers.each(function(val){
* console.log(val+"!");
* });
* console.log("Who do we appreciate!?");
*
* evenNumbers.size() should be 4
* evenNumbers.includes(2) should be true, evenNumbers.include(3) should be false
*/


var Range = function(start, end, step) {
  // TODO: Your code here
  // set a constructor accepts arguments
    this.start = start;
    this.end = end;
    this.step = step || 1; 
}
// add prototype function
Range.prototype.range = function() {
  result = [];
  // evaluate if a given start exist
  if (this.start === undefined) {
    return "No start value provided!" // if not, throw error
  }

  if (this.step === undefined && this.start > this.end) {
    for(var i = this.start; i >= this.end; i--){
      result.push(i);
    }
  } else if (this.step < 0) {
    for(var i = this.end; i >= this.start; i += this.step) {
        result.push(i);
      }
  } else {
    for(var i = this.start; i <= this.end; i += this.step) {
        result.push(i);
      }
  }
  return result;
}

Range.prototype.size = function(){
  // TODO: Your code here
  return this.range().length;
}
  
Range.prototype.each = function(callback){
  // TODO: Your code here
  this.range().forEach(function(item) {
    callback(item);
  })
}

Range.prototype.includes = function(val){
  // TODO: Your code here
  return this.range().includes(val);
}