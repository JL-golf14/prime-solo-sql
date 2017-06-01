#Question1 I looked everywhere and couldn't find anything to make the scope of this work for a global variable by adding to line 1 (11,12).  I do understand why it won't work, because "this" is undefined as a global variable when calling it outside of the object.

#Question 2:  These methods, map, reduce and filter, make code less complex, without side effects, and often more readable.
They are alternatives when translating elements, finding cumulative values, or building subsets based on conditions.
map(): Use to translate/map all elements in an array to another set of values
filter(): Use to remove unwanted elements based on a condition
reduce(): Use to find cumulative/concatenated values based on elements across the array
#Question 3

function repeat(string,seconds,intervals) {
  for (var i = 0; i< intervals; i++) {
    setTimeout(myTimeout,((1000*seconds)+(i*1000*seconds)))
  }
  function myTimeout() {
    console.log(string);
  }
}
repeat('test code',2,5)
#Question 4

  <input type="text"  onkeyup="this.value=this.value.toUpperCase()"/>

  #Question 5
  The parent div says blue so its blue by css hierarchy














//     var res = input.toUpperCase();
//     document.getElementById("uppercase-input").innerHTML = res;}
//
// myFunction(input)

// //
// var logger = {
//     leadText: 'INFO: ',
//     info: function (str) {
//         console.log(this.leadText + str)
//     }
// }
//
// var fn = logger
// fn.info = logger.info
// fn.info('function was called')


// "this" is a local variable and is undefined when on a global scope for fn,  you could use a bind or make it into a constructor function as well.
