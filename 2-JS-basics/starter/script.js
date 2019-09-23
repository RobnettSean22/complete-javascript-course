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

function calculateAge(birthYear){
    return 2018 - birthYear;
}

  var ageJohn, ageMike, ageJane;
  ageJohn = calculateAge(1990);
  ageMike = calculateAge(1940);
  ageJane = calculateAge(1980);

  console.log(ageJohn, ageJane, ageJane)

//example of passing in another function  in to a function. look at calculateAge and yearsUntillRetirment functions below.
  function yearsUntillRetirment(year, firstName){
      var age = calculateAge(year);
      var retirment = 65 - age;
      if(retirment > 0){
          console.log(firstName + ' retires in ' + retirment + ' years.')
      }else{
          console.log(firstName + ' already retired!')
      }
      
  }
 
    yearsUntillRetirment(1990, 'John')
    yearsUntillRetirment(1940, 'Mike')
    yearsUntillRetirment(1980, 'Jane')

    /*****************************************
     * function statments/ function expressions
     */

     //function statment
    // function whatDoYouDO(job, firstName){

    // }
    
     //  function expression same as the structure above
     /// function expressions all ways return a value
     var whatDoYouDO = function(job, firstName){
         switch(job){
             case 'teacher':
                 return firstName + ' teaches kids how to code';
             case 'driver':
                return firstName + ' drives uber in New York';
             case 'desginer':
                return firstName + 'desgines beautiful websites';
             default:
                 return firstName + ' does some other job';
         }
    }

    console.log(whatDoYouDO('teacher', 'John'))
    console.log(whatDoYouDO('designer', 'Jane'))
    console.log(whatDoYouDO('driver', 'Mike'))

/**********************************************
 * Arrays
 * like collections of varibles
 */
// initailize new array
 var names = ['John','Mark', 'Jane'];

 var  years = new Array(1990, 1949, 1998); // normally will not use this method

 console.log(names)
console.log(names.length)

// mutate new array data
names[1] = 'Ben';
names[names.length] = 'Marry';
console.log(names)

//different data types

var john = ['John', 'Smith', 1990, 'designer', false]

john.push('blue')
john.unshift('Mr.')
john.pop()
john.shift()
console.log(john)
//if the value is note in the array it will return -1
console.log(john.indexOf('taco'))

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner)

/****************************************************
 * Coding challenge
 */

 /**
  * John and his family went on a holliday and went to 3 differnt resturants. The bills wre $124, $48, $268.
  * 
  * To tip the waiter a fair amount,john created a simple tip calculator (as a function). he likes to tip 20% of the bill when the bill is less than $50,
  * 15% when tge bill is between $50 and $200, and 10% if the bill is more than $200.
  * 
  * In the end, John would like to have 2 arrays:
  * 1. containing all three tips (one for each bill)
  * 2. contatining all three final paid amounts(bill + tip)
  */

  



















