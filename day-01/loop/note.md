<!-- for loop syntax -->
for (initialization, condition, increment/decrement) {}

const nums = [1, 2, 3, 4, 5];
const lastIndex = nums.length - 1;
const newArray = [];
for (let i = lastIndex; i >= 0; i--) {
  newArray.push(nums[i]);
};



<!-- while loop -->
let count = prompt('Enter a positive number: ')
while (count > 0) {
  console.log(count)
  count--
}



<!-- do while loop -->
let count = 8;
do {
  console.log(count);
  count++;
} while (count < 11)



<!-- for of loop -->
<!-- The for of loop is very handy to use it with array. If we are not interested in the index of the array a for of loop is preferable to regular for loop or forEach loop. -->

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
for (const country of countries) {
  console.log(country.toUpperCase());
};



<!-- forEach loop -->
<!-- If we are interested in the index of the array forEach is preferable to for of loop. The forEach array method takes a callback function, the callback function takes three arguments: the item, the index and the array itself. -->

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
countries.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase());
});




