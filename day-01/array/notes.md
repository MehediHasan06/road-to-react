<!-- Math.max() & Math.min() -->
The Math.max() function returns the largest of zero or more numbers.
The Math.min() function returns the smallest of zero or more numbers.

Math.max(1, 2, 3)    // 3
Math.min(1, 2, 3)    // 1

But what if we have array of number and we would like to find min and max value in it. If we send an array to Math.min or Math.max methods,we will get NaN. That is because Math.min or Math.max functions expect distinct variables and not an array.
const nums = [1, 2, 3]
Math.min(nums)    // NaN
Math.max(nums)    // Nan

In order to do that before ES6/ES2015 apply method was used.
var nums = [1, 2, 3]
Math.min.apply(Math, nums)    // 1
Math.max.apply(Math, nums)    // 3
Math.min.apply(null, nums)    // 1
Math.max.apply(null, nums)    // 3

The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.
const nums = [1, 2, 3]
Math.min(...nums)    // 1
Math.max(...nums)    // 3


<!-- Array middle value -->
arrLength % 2 === 0 ? console.log(ages[(arrLength/2)-1],ages[arrLength/2]) : console.log(ages[Math.round(ages(arrLength/2)-1)]);
