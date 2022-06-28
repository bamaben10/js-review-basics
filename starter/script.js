// let js = 'amazing';
// if (js === 'amazing') alert ('Javascript is FUN!');

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);


// // math operators
// const now = 2037;
// const ageBen = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageBen, ageSarah);

// console.log(ageBen * 2, ageBen /10, 2 ** 3)
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Ben';
// const lastName = 'Salmon';
// console.log(firstName + ' ' + lastName);

// // assignment operators
// let x = 10 + 5; // 15
// x += 10;  // x = x + 10  which equals 25
// x *= 4; // x = x * 4 which equals 100
// x++; // x = x + 1;
// x--;
// x--;
// console.log(x);


// // comparison operators
// console.log(ageBen > ageSarah); // >, <. <=, >=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018)




const now = 2037;
const ageBen = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageBen + ageSarah) / 2
console.log(ageBen, ageSarah, averageAge);


//////////////////////////////////////////////////
// Coding Challenge #1

/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).  (mass in kg and height in meter).

1.  Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks wight 78 kg and is 1.69 m tall.  John weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.  John weights 85 kg and is 1.76 m tall.  

Good luck 
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const massBen = 97.5;
// const heightBen = 1.95;

// const BMIBen = massBen / heightBen ** 2;
// console.log(BMIBen); 25.6

// test out DATA 2, so comment out data 1, copy it and change the variable
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn)
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


