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

  var johnsMass, johnsHeight, marksMass, marksHeight;
  johnsMass = 76;
  johnsHeight = 1.77;
  marksMass = 83;
  marksHeight = 1.8;

  var johnsBmi, marksBmi, marksBmiMore;

  johnsBmi = johnsMass / (johnsHeight * johnsHeight);
  marksBmi = marksMass / (marksHeight * marksHeight);
  marksBmiMore = johnsBmi < marksBmi;

  if(marksBmi > johnsBmi){
     console.log(`Marks BMI is higher than John's`)
  }else{
    console.log(`John's BMI is higher than Mark's`)
  }
       
  

//   console.log( `Mark's BMI is ` + marksBmi + ` and John's is ` + johnsBmi +  ` Is Marsk BMI hgigher than Johns? ` + marksBmiMore)

/**************************************************
 * if/else statments
 */

 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married'){
     console.log(firstName + ' is married')
 }else{
     console.log(firstName + ' will marry soon')
 }

 
 var isMarried = false;
 if(isMarried){
     console(firstName + ' is married!')

 }else{
     console.log(firstName + ' will marry soon')
 }

 /*************************************************
  * boolean logic
  * && (and), || (or), ! (not)
  */
 
 var firstName, age;
 firstName = 'John';
 age = 16;

 if(age < 13){
    console.log('He is a boy!')
 }else if(age >= 13 && age < 20){
    console.log('He is a teenager!')
 }else{
    console.log('He is a man!')
 }
     
 



  



















