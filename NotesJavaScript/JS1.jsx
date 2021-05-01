 //***** */
 

 //var(variable or key) myName(name) ="vinod"(value)
 // name convantion  1st character must be letter or _ or $  not use Number in first letter
 //variable name is caseSensitive 

 // Date types in JS 
 //which type of value u assigned is called data types 

 // primitives: undefine : typeOfinstance === "undefined"
 // Boolean TypeOfinstance ==="boolean", 
 // typeofinstance === "symbol"
 // BigInt: tfi="biginit"  // u can't handle number whose output is infinity 

// "sa" + "as"  // saas
//  4- "1"  // 3 (bug)
// "ja" - "ja" // Nan

// differnce b/w undefined nd null 

// var iAmUse = null;
// console.log(iAmUse)  //null 
// console.log(typeof(iAmUse))   // object ?  (bug)


// var iAmStandBy;   // this is undefined 
// console.log(typeof(iAmStandBy))  // undefined 


// What is NaN?
//"s"-"a"  //  NaN

// NaN is a property of global object (variable in global scope)
// initial value of NaN is not- A - Number 

// var myPhneNumber = 899898;
// var name ="mohd"
// isNan(myphoneNumber) // false this method is used to create a form user enter a number or not 
//isNan(name)   // true

//isNaN(NaN)  // true
//Number.isNaN(NaN)  // true


/********operator nd operator nd expression 
 * operator+operand = expression 
 */
// var x = 5;
// var y = 5;
// console.log("is both the x and y are equal or not" + x == y) // false
// console.log(`is both are equal : ${x==y}`)


// % modular operator return the division remainder
// 27%4 // 3


//*********** POST (jo hoga baad mein dekha jayega)increment*/
// first stored value then increment 
// var x = 12;
// var y = x++;  // x++ + 5 (num +5)
// console.log(x)  // 13
// console.log(y)  //12  // 17

// Prefix    // increment first :
// var x = 12;
// var y = ++x;
// console.log(x);
// console.log(y)

// challenge Sections //

// without using third variable
// var x = 12;
// var y = 13;

// [x,y] =[y,x]
//  console.log(x)
//  console.log(y)

//  // using 3rd variable
//  var a = 10
//  var b = 12;
  
//   var c= b ;  // c = 12
//   b =a ;  // b = 10
//   a = c;
//   console.log(a)
//   console.log(b)

//******* difference b/w == and === */

// var n1 = 5
// var n2= '5'

// console.log(n1==n2)  /// its only check value // true 

// console.log(n1===n2) // false check value nd date type 

//Challenge time//

// var leap = 2020;

// if(leap%4 ===0) {
//      if(leap%100=== 0) {
//          if(leap% 400===0) {
//              console.log(" the year " + leap)
//          } else {
//              console.log("the year is not leap ")
//          } 
//          }
//          else {
//              console.log("leap year ")
//          }
//          }else {
//              console.log("not leap year")
//          }
     

// We have total 5 false value in Js
// 0 ,"",undefined, null, NaN , false**

//* calculate area, of circle, rect, trigh)

// var area = "circle"
//  var PI = 3.142, l= 5,b = 4,r =3;

//  switch(area) {
//      case 'circle':
//          console.log(" area of circle : " + PI *r**2 )
           //break; // stop after the case is executed !!
//          case 'triangle':
//              console.log("area of triangle  :" + (l*b)/2)
  
//              default:
//                  console.log("please enter the valid data")
//  }

// while b/w do while 
// while statement creates a loop that executes a specified statement as long as the test 
// condition evaluates to true 
//  var i=0
// while( i<=10) {
//     console.log(i)
//     i++;
// }
//0 1 2 -----10

// wap to prints the no 1 to  100
// but for multiples of three print "fizz" instead of the number 
// for multiples of five print "buzz"
// for number which are multiples of both three and five print "fixxBuzz"


// function number(i) {
//     for(i=1; i<=100; i++) {
//         if(i%3 ==0) {
//             console.log("fizz")
//         } else if( i%5== 0) {
//             console.log("buzz")
//         } else if (i%5 ==0 && i%3 ==0){
//             console.log("Im fizzbuzz")

//         } else {
//             console.log(i)
//         }
        
//     }
    

     
// }

// number()   // no output of fizz 


// (function fizzBuzz() {

//     for(let i =0 ; i<=100 ; i++) {
//      let str ='';
//      if(i%3 == 0) {
//          str += 'fizz';
//      }   
//      if(i%5 == 0 ) {
//          str +='Buzz'
//      }
//      console.log(i+str)
//     }
// })();

// splice method() is used to ADD/ remove element from an array 

//Q Add dec at the end of array
//what is the return value of splice 
// update march to MARCH(update) 
// Delete June from an array ?

// const months = ['jan' , 'march', 'April', 'june']

// // sol1 
// const newMonths = months.splice(5,0,"Dec")
// // splice(months.length)
// //index no , delete , string
// console.log(months)
//sol2
// splice kitne element ko delete kr raaghagz
  /// sol3
//   const months = ['jan' , 'march', 'April', 'june']
  
//   const indexOfMonth = months.indexOf("march") ;

//   if(indexOfMonth !==-1) {
//       const updateMonth = months.splice(indexOfMonth,1,'MARCH')

//       console.log(months)
//       console.log(updateMonth)
//   } else {
//       console.log("no date found")
//   }

// map method

// let newArray = array.map(callbackValue[,
//      index[, array]])
//      // return element of newArray after something
// }[, thiSArg]

// Returns a new Array containing the results of
// calling a function on evry element in this array


// it return new array without mutating the
// original array 

// let arr = [2,3,4,6,8];

// let arr2 = arr.map((curElm)=> curElm*2).filter((curElm) => curElm>10);
// console.log(arr2)

// Reduce method
// flatten an array means to convert the 3D or 2D
// array into single dimension 


// the reduce() method execute a reducer function
// that u provided on each element of the array
// resulting in single output value 

// the reducer function takes 4 arguments
// accumulator  // all data is stored easily calculated sum, average, %
// current value
// current index
// source Array 

// let arr = [0,1,2]

// let arr1 = arr.reduce((accumalator, curElm, index, arr)=> {
//     return accumalator+=curElm;
// },7(initial value))
//  console.log(arr1)
























































































    

































  





























































































