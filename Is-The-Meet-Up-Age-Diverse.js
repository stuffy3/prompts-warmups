https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse


// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];
// your function should return true as there is at least one developer from each age group.

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.

function isAgeDiverse(list) {
    let ageGroup = {
     teens: 0,
     twenties: 0,
     thirties: 0,
     forties: 0,
     fifties: 0,
     sixties: 0,
     seventies: 0,
     eighties: 0,
     nineties: 0,
     centenarian: 0
    }
  list.forEach((e) => {
      if(e.age > 10 && e.age < 20) {
        ageGroup.teens = 1
      } else if (e.age >= 20 && e.age < 30) {
        ageGroup.twenties = 1
      } else if (e.age >= 30 && e.age < 40) {
        ageGroup.thirties = 1
      } else if (e.age >= 40 && e.age < 50) {
        ageGroup.forties = 1
      } else if (e.age >= 50 && e.age < 60) {
        ageGroup.fifties = 1
      } else if (e.age >= 60 && e.age < 70) {
        ageGroup.sixties = 1    
      } else if (e.age >= 70 && e.age < 80) {
        ageGroup.seventies = 1    
      } else if (e.age >= 80 && e.age < 90) {
        ageGroup.eighties = 1    
      } else if (e.age >= 90 && e.age < 100) {
        ageGroup.nineties = 1    
      } else if (e.age >= 100) {
        ageGroup.centenarian = 1    
      }
    })
    let arr = Object.values(ageGroup)
    .reduce((prev, curr) => {
     return prev + curr;
    }, 0)
    
     if(arr >= 10) {
       return true
     } else {
       return false
     }
}