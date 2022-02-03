https://www.codewars.com/kata/5208f99aee097e6552000148

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  }