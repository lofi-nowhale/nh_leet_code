// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: `BMI = mass / (height * height)` (mass in kg and height in meters).

// Your task is to write some code to help them:

// 1. Store Mark's and John's mass and height in variables called `massMark`, `heightMark`, `massJohn` and `heightJohn`.

// 2. Calculate both their BMIs using the formula, and store the results in two variables called `BMIMark` and `BMIJohn`.

// 3. Log the value of `BMIMark` and `BMIJohn` to the console.

// 4. **BONUS**: Create a boolean variable `markHigherBMI` containing information about whether Mark has a higher BMI than John. Log it to the console too


// **TEST DATA 1:** Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// **TEST DATA 2:** Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


// **IMPORTANT:** The `**` operator is not supported in this editor. Please make sure to use exactly this formula `mass / (height * height)`, and not this one `mass / (height ** 2)`.

massMark = 78;
heightMark = 1.69;

massJohn = 92;
heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);

let BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = BMIMark > BMIJohn

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);