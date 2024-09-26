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