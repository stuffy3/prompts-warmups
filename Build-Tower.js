https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

function towerBuilder(nFloors) {
    let floor = []
      for(let i = 0; i < nFloors; i++) {
          floor.push(' '.repeat(nFloors - i - 1)
          + "*".repeat((i * 2)+ 1)
          + " ".repeat(nFloors - i - 1)
          )}
          return floor
  }