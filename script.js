console.log("JavaScript file is linked correctly. Hooray.");
console.log("Using for loop:");
for (let i = 0; i <= 50; i++) {
  console.log(i);
}
console.log("Using while loop:");
let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}
console.log("Using do-while loop:");
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 30);
const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];
console.log("Even numbers in the array:");
for (let k = 0; k < numbers.length; k++) {
  if (numbers[k] % 2 === 0) {
    console.log(numbers[k]);
  }
}
const currentDay = new Date().getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is " + daysOfWeek[currentDay]);