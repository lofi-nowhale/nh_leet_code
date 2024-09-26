// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: `BMI = mass / (height * height)` (mass in kg and height in meters).

// Your task is to write some code to help them:

// 1. Store Mark's and John's mass and height in variables called `massMark`, `heightMark`, `massJohn` and `heightJohn`.

// 2. Calculate both their BMIs using the formula, and store the results in two variables called `BMIMark` and `BMIJohn`.

// 3. Log the value of `BMIMark` and `BMIJohn` to the console.

// 4. **BONUS**: Create a boolean variable `markHigherBMI` containing information about whether Mark has a higher BMI than John. Log it to the console too


// **TEST DATA 1:** Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// **TEST DATA 2:** Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


// **IMPORTANT:** The `**` operator is not supported in this editor. Please make sure to use exactly this formula `mass / (height * height)`, and not this one `mass / (height ** 2)`.

// solution//

// massMark = 78;
// heightMark = 1.69;

// massJohn = 92;
// heightJohn = 1.95;

// let BMIMark = massMark / (heightMark * heightMark);

// let BMIJohn = massJohn / (heightJohn * heightJohn);

// let markHigherBMI = BMIMark > BMIJohn

// console.log(BMIMark, BMIJohn);
// console.log(markHigherBMI);

//CHALLENGE #2

// Use the BMI example from **Challenge #1**, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// `"Mark's BMI is higher than John's!"` or `"John's BMI is higher than Mark's!"`.

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: `"Mark's BMI (28.3) is higher than John's (23.9)!"` or `"John's BMI (29.1) is higher than Mark's (27)!"`.

// **Note:** Don't round the BMI values. Leave them as they are.


// **IMPORTANT:** The `**` operator is not supported in this editor. Please make sure to use exactly this formula `mass / (height * height)`, and not this one `mass / (height ** 2)`.

//solution
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn

console.log(BMIMark, BMIJohn);

if (markHigherBMI) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);

} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

// CHALLENGE 3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// **Your tasks:**

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the `scoreDolphins` variable, and the average score of Koalas should be assigned to the `scoreKoalas` variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// `"Dolphins win the trophy"` if Dolphins win, or

// `"Koalas win the trophy"` if Koalas win, or

// `"Both win the trophy"` if their average scores are equal.

// **TEST DATA:** Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

//note - I didn't have to define the scores as constants, i could have instead put the score as a plain int into the equation for scoreDolphins and scoreKoalas

const d1 = 96;
const d2 = 108;
const d3 = 90;

const k1 = 88;
const k2 = 91;
const k3 = 110;

let scoreDolphins = (d1 + d2 + d3) / 3;

let scoreKoalas = (k1 + k2 + k3) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

// The Switch Statement -- used as an alternative for a complex if/else statement 
//example we will have a const for each day of the week and then an activity for each day

const day = 'monday';

switch (day) { //compare day to monday > day === 'monday' and if true execute 
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday': //if we want to run the same code for 2 cases, we can just write the next case right under the previous one, then it will execute the code for the bottom case.
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record Videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend')
    break;
  default:
    console.log('Not a valid day!') // this will execute if all the other cases fail. 
}

