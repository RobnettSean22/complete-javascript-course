// varibles and data types
// varible naming and rules

// var firstName = 'John';
// console.log(firstName)

// var lastName = 'Smith';
// var age = 24;

// var fullAge = true;
// console.log(fullAge)

// var job = 'Teacher';
// console.log(job)

// var year = 3;

// var johnMark = 'John and Mark';

/*********************************************
 * varible mutation and type coercion
 */

//  var firstName = 'John';
//  var age = 28;
// // type coercion
//     console.log(firstName + ' ' + age)

//  //type coercion
//     var job , isMariied;
//     job = 'teacher';
//     isMariied = false;

//     console.log(firstName + 'is a ' + age + ' year old ' + job + '. Is he married?' + ' ' + isMariied )

//  //Varible mutation

//     age = 'twenty eight';
//     job = 'driver';

// // alert() alternative to console.log()

//     alert(firstName + 'is a ' + age + ' year old ' + job + '. Is he married?' + ' ' + isMariied )
// // prompt() makes a pop in the window allowing one to enter information

//     var lastName = prompt('What is his last name?')
//     console.log(firstName + ' ' + lastName)

/****************************************************************
 * Basci Operators
 *  */

//     var year, yearJohn, yearMark;
//     now = 2019
//     ageJohn = 28;
//     ageMark = 33;

// // math operators
//     yearJohn = now - 28;
//     yearMark = now - 33;

//     console.log(yearJohn)

//     console.log(now + 2)
//     console.log(now * 2)
//     console.log(now / 10)

// // logical operators
//     var markOlder = ageMark > ageJohn;
//     var johnOlder = ageJohn > ageMark;
//     console.log(markOlder)
//     console.log(johnOlder)

// // typeof operators - tells you what datatype it is
//     console.log(typeof johnOlder)
//     console.log(typeof yearJohn)
//     console.log(typeof 'Mark is older than John')
//     console.log(typeof x)

// /****************************************
//  * orperator precedence/associativity - refernce in book mark folder (codingheros.io/refernces)
//  *  = opertator works from right to left and others like the *, + operators work from left to right. this is (Assoviativity)
//  */

//  var now, yearJohn, fullAge;
//     now = 2018;
//     yearJohn = 1989;
//     fullAge = 18;

// // multiple operators
//     var isFullAge = now - yearJohn >= fullAge; //true
//     console.log(isFullAge)
// // grouping
//     var ageJohn = now - yearJohn;
//     var ageMark = 35;
//     var average = (ageMark + ageJohn) / 2;

// // multipe assignments
//     var x, y;
//     x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6// 32 - 6// 26
//     console.log(x)

// // more operators
//     // x = x * 2;
//     x *= 2; //same as structure above

//     x += 10
//     console.log(x)

//     // x = x + 1;
//     // x += 1;
//     x++ //same as the two above structures ++ just + 1 to the varible, same works with --

// /*********************************************
//  * Coding challenge 1
//  */

//  /**
//   * Mark and John are trying to compare their BMI(Body Mass Index), whicih is calculated using the formula:
//   * BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meters).
//   *
//   * 1. store Marks's and John's mass and height in varibles
//   * 2. calculate both their BMIs
//   * 3. create a boolean variable containing information about whether Mark has a higher BMI than John.
//   * 4. print a string to the console containing the variable from step 3. (Somthing like 'Is Mark's BMI higher than John's? true').
//   */

//   var johnsMass, johnsHeight, marksMass, marksHeight;
//   johnsMass = 76;
//   johnsHeight = 1.77;
//   marksMass = 83;
//   marksHeight = 1.8;

//   var johnsBmi, marksBmi, marksBmiMore;

//   johnsBmi = johnsMass / (johnsHeight * johnsHeight);
//   marksBmi = marksMass / (marksHeight * marksHeight);
//   marksBmiMore = johnsBmi < marksBmi;

//   if(marksBmi > johnsBmi){
//      console.log(`Marks BMI is higher than John's`)
//   }else{
//     console.log(`John's BMI is higher than Mark's`)
//   }

// //   console.log( `Mark's BMI is ` + marksBmi + ` and John's is ` + johnsBmi +  ` Is Marsk BMI hgigher than Johns? ` + marksBmiMore)

// /**************************************************
//  * if/else statments (a way to right conditional coed) way 1!
//  */

//  var firstName = 'John';
//  var civilStatus = 'single';

//  if (civilStatus === 'married'){
//      console.log(firstName + ' is married')
//  }else{
//      console.log(firstName + ' will marry soon')
//  }

//  var isMarried = false;
//  if(isMarried){
//      console(firstName + ' is married!')

//  }else{
//      console.log(firstName + ' will marry soon')
//  }

/*************************************************
 * boolean logic
 * && (and), || (or), ! (not)
 */

//  var firstName, age;
//  firstName = 'John';
//  age = 16;

//  if(age < 13){
//     console.log('He is a boy!')
//  }else if(age >= 13 && age < 20){
//     console.log('He is a teenager!')
//  }else if(age >= 20 && age < 30){
//     console.log('He is a young man!')
//  }else{
//     console.log('He is a man!')
//  }

/***************************************************
 * ternary operator and switch statments (a way to right conditional coed) way 2!
 */

//  var firstName, age;
//  firstName = 'John';
//  age = 16;

// //  ternary operator
//  age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.')

// var drink = age >= 18 ? 'beer' : 'juice'
// console.log(drink)  //same as structure below

// // if(age >= 18){
// //     drink = 'beer';
// // }else{
// //     dirnk = 'juice'
// // }

// // switch statment - used with string you want to compare (a way to right conditional coed) way 3!

// var job = 'cop'
// switch(job){
//     case 'teacher':
//     case 'intructore':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in New York');
//         break;
//     case 'designer':
//         console.log(firstName + ' makes beautiful websites.');
//         break;
//         default:
//         console.log(firstName + 'does somtthing else');
// }

// var firstName, age;
// firstName = 'John';
// age = 31;

// switch(true){
//     case age < 13:
//         console.log('He is a boy')
//         break;
//     case age >= 13 && age < 20:
//         console.log('He is a teenager')
//         break;
//     case age >= 20 && age < 30:
//         console.log('He is a young man')
//         break;
//         default:
//         console.log('He is a man')
// }

// // var firstName, age;
// // firstName = 'John';
// // age = 16;

// // if(age < 13){
// //    console.log('He is a boy!')
// // }else if(age >= 13 && age < 20){
// //    console.log('He is a teenager!')
// // }else if(age >= 20 && age < 30){
// //    console.log('He is a young man!')
// // }else{
// //    console.log('He is a man!')
// // }

// /***************************************************
//  * truthy falsey values
//  * undefined, null, 0, '' = falsey values
//  * not falsey values = truthy values
//  */

//  var height;
//  height = 23;

// //  good way to check if any varible is defined
//  if(height || height === 0){
//      console.log('varible is defined')
//  }else{
//     console.log('Varible has not been defined')
//  }

//  //equality operators
//  //== (non strict equality operator) does coercion

//  if(height == '23'){
//      console.log('The == operater does type coercion')
//  }

//  /*************************************************
//   * Coding Challenge 2
//   */

// /**
//  * John and Mike both play basketball on differnt teams. In the lastest 3 games, John's team scored 89, 120 and 103 points,
//    while Mike's team scored 116, 94, and 123 points.

//  * 1.Calculate the averge scoe for each team
//  * 2. Decide which teams wins based on average (Highest aveage wins) Print the winner to the console.
//  * 3. Then change the scores to show a different winners. dont forget to take into acct there might be a draw (the same average)
//  * Extra: Mary aslo plays basketball, and her team scored 97, 134, and 105 points. Like before, loig the average winner to the console. Hint: you will need the
//  * && operator to make the decision.
//  */

//  var johnTeamAverage, mikeTeamAverage,
//  johnTeamAverage = (94 + 100 + 116) / 3;
//  mikeTeamAverage = (116 + 94 + 132) / 3;
//  maryTeamAverage = (116 + 133 + 94) / 3;

//  if(johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage){
//     console.log('John wins!')

//  }else if(mikeTeamAverage > johnTeamAverage &&  mikeTeamAverage > maryTeamAverage){
//     console.log('Mike wins!')

//  }else if(maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage){
//      console.log('Mary wins!')

//  }else{
//      console.log('tie')
//  }

/************************************************
 * functions
 */

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn, ageMike, ageJane;
ageJohn = calculateAge(1990);
ageMike = calculateAge(1940);
ageJane = calculateAge(1980);

console.log(ageJohn, ageJane, ageJane);

//example of passing in another function  in to a function. look at calculateAge and yearsUntillRetirment functions below.
function yearsUntillRetirment(year, firstName) {
  var age = calculateAge(year);
  var retirment = 65 - age;
  if (retirment > 0) {
    console.log(firstName + " retires in " + retirment + " years.");
  } else {
    console.log(firstName + " already retired!");
  }
}

yearsUntillRetirment(1990, "John");
yearsUntillRetirment(1940, "Mike");
yearsUntillRetirment(1980, "Jane");

/*****************************************
 * function statments/ function expressions
 */

//function statment
// function whatDoYouDO(job, firstName){

// }

//  function expression same as the structure above
/// function expressions all ways return a value
var whatDoYouDO = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drives uber in New York";
    case "desginer":
      return firstName + "desgines beautiful websites";
    default:
      return firstName + " does some other job";
  }
};

console.log(whatDoYouDO("teacher", "John"));
console.log(whatDoYouDO("designer", "Jane"));
console.log(whatDoYouDO("driver", "Mike"));

/**********************************************
 * Arrays
 * like collections of varibles
 */
// initailize new array
var names = ["John", "Mark", "Jane"];

var years = new Array(1990, 1949, 1998); // normally will not use this method

console.log(names);
console.log(names.length);

// mutate new array data
names[1] = "Ben";
names[names.length] = "Marry";
console.log(names);

//different data types

var john = ["John", "Smith", 1990, "designer", false];

john.push("blue");
john.unshift("Mr.");
john.pop();
john.shift();
console.log(john);
//if the value is note in the array it will return -1
console.log(john.indexOf("taco"));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John IS a designer";
console.log(isDesigner);

/****************************************************
  Coding challenge
 */

/**
 * John and his family went on a holliday and went to 3 differnt resturants. The bills wre $124, $48, $268.
 *
 * To tip the waiter a fair amount,john created a simple tip calculator (as a function). he likes to tip 20% of the bill when the bill is less than $50,
 * 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
 *
 * In the end, John would like to have 2 arrays:
 * 1. containing all three tips (one for each bill)
 * 2. contatining all three final paid amounts(bill + tip)
 */

var bill = [124, 48, 268];
var tip = [];
var totalAmount = [];
function tipCalculator() {
  for (var i = 0; i <= bill.length - 1; i++) {
    if (bill[i] < 50) {
      tip.push(0.2 * bill[i]);
      totalAmount.push(0.2 * bill[i] + bill[i]);
    } else if (bill[i] > 50 && bill[i] < 200) {
      tip.push(0.15 * bill[i]);
      totalAmount.push(0.15 * bill[i] + bill[i]);
    } else {
      tip.push(0.1 * bill[i]);
      totalAmount.push(0.1 * bill[i] + bill[i]);
    }
  }
  console.log(tip);
  console.log(totalAmount);
}
console.log(tipCalculator())

/********************************************
 * objects and properties
 */
// object literal structure
 var john ={
   firstName: 'John',
   lastName: 'Smith',
   birthYear: '1989',
   family: ['jerry', 'Mark', 'Bob', 'Emily'],
   job: 'teacher',
   isMaried: false
 }

 console.log(john.family)
 console.log(john['birthYear'])
 var x = 'birthYear';
 console.log(john[x])

 john.job = 'driver'
 console.log(john.job)
 john['lastName'] = 'larry'
 console.log(john['lastName'])

//object syntax
 var jane = new Object();
 jane.name = 'Jane';  
 jane.lastName = 'Smoke'
 jane.birthYear = '2000'
 jane.job = 'Bartender'
 jane.isMaried = true
console.log(jane)

/***************************************
 * object methods
 */

 var john ={
  firstName: 'John',
  lastName: 'Smith',
  birthYear: '1990',
  family: ['jerry', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMaried: false,
  calcAge: function(){
    this.age = 2019 - this.birthYear
  }
}
john.calcAge();
console.log(john)

/**********************************
 * coding challeng 4
 */

 var john = {
   fullName: 'John Smith',
   mass: '70',
   height: 1.77,
   calcBMI : function(){
     this.BMI = this.mass / (this.height * this.height)
     return this.BMI
   }

 }

 var mark = {
   fullName: 'Mark Long',
   mass: 89,
   height: 1.88,
   calcBMI: function(){
     this.BMI = this.mass / (this.height * this.height)
     return this.BMI
   }
 }

 john.calcBMI()
 console.log(john.BMI)
 
mark.calcBMI()
console.log(mark.BMI)

// console.log( `${mark.fullName} has a BMI of  ${mark.calcBMI()} which is higher than ${john.fullName} who has a BMI of ${john.calcBMI()}`)
function higherBMI(){
  if(mark.calcBMI() > john.calcBMI()){
    return `${mark.fullName} BMI of ${mark.calcBMI()} is higher then ${john.fullName}`
  }else if(mark.calcBMI() < john.calcBMI()){
    return `${john.fullName} BMI of ${john.calcBMI()} is higher then ${mark.fullName}`
  }else{
    return `${john.fullName} and ${mark.fullName} have the same BMI `
  }
}
 console.log(higherBMI(john,mark))

 /**************************************
  * loops and iterations
  */
  
  for(var i = 0; i <= 10; i+=2){
    console.log(i)
  }
  
  var john = ["John", "Smith", 1990, "designer", false];
 for(var i = 0; i < john.length; i++){
  console.log(john[i])
 }
// var i = 0
//  while(i < john.length){
//   console.log(john[i])
//   i++;
  
//  }

// continue (goes past the not) and break (stops the loop) statments ***************************************
var john = ["John", "Smith", 1990, "designer", false];
john.push('blue')
john.splice(0,0,'coffee')
for(var i = 0; i < john.length; i++){
  if(typeof john[i] !== 'string') continue;
 console.log(john[i])
}

for(var i = 0; i < john.length; i++){
  if(typeof john[i] !== 'string') break;
 console.log(john[i])
}
//looping backwards********************************************************************
for(var i = john.length -1; i>= 0; i--){
  console.log(john[i])
}

/******************************************************************
 * coding challeng 5
 

Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// var summation = function (num) {
//   var arr = []
//  for(i = 1; i <= num; i++){
//    arr.push(i)
//  }
//     arr.reduce()
// }

 
