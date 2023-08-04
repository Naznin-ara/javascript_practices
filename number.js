/***** * Write a function, persistence, that takes in a positive parameter num and
 returns its multiplicative persistence, which is the number of times
  you must multiply the digits in num until you reach a single digit. */
// solution 1

// function multiplydigit(num){
//   return num.toString().split("").reduce((result,digit) => result*parseInt(digit),1);
// }

// function persistence(num){
//   let count =0;
//   while(num>=10){
//     num = multiplydigit(num);
//     count++;
// }
// return count;
// }

// solution 2


// function persistence(num) {
//   var times = 0;
  
//   num = num.toString();
  
//   while (num.length > 1) {
//     times++;
//     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//   }
  
//   return times;
// }
 
// let x = persistence(39);
// console.log(x);

// **** to get digital root

// function myFunction(num){
//   let count = 1;
// while(num>9){
// count++;
//   num = num.toString().split("").map(Number).reduce((a,b) => a+b);
// }
  
// return num;
// }


// let x = myFunction(23045789);
// console.log(x);


// function multiplyDigits(num){
// return num.toString().split("").map(Number).reduce((a,b) => a*b);
  
// }
// function persistence(num) {
//   let result = num;
//   let count = 0;
  
//   while (result >= 10) {
//     result = multiplyDigits(result);
//     count++;
//   }
  
//   return result;
// }

// // Example usage:
// const num = 39;
// const persistenceResult = persistence(num);
// console.log(`Multiplicative persistence result of ${num} is ${persistenceResult}`);

// function myFunction(str){
//   return result = str.split(" ").sort().join(" ");
// }

// let x = myFunction("1the wo4rld 2is so3 beautiful5");
// console.log(x);

//**** */ find factorial
// function factorial (num){
//   let result = 1;
//   for (let i= num; i >= 1; i--){
//    result = result * i;

//   }
//   return result;
// }
// let x = factorial(6);
// console.log(x);

//**** */ find largest number from an array

// function largest_lowest_number(num){
//   let largest = num[0];
//   let lowest = num[0] ;
//   for (var i =0; i<num.length; i++){
//     if(largest < num[i]){
//       largest = num[i];
//     }else if (lowest > num[i]){
//       lowest = num[i];
//     }
//   }
//   return result = [largest, lowest];
// }

// let x = [20,35,10,89,76,50,5,100,92];
// let a = largest_lowest_number(x);
// console.log(a);


// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.


// function highAndLow(numbers){
//   // ...
//   let newarray =[];
//   let x = numbers.split(' ').map(Number);
// let y = x.sort((a,b) => {return a-b;} );
// newarray.push(y[0]);
// newarray.push(y[y.length-1])
// let result = newarray.reverse().join("  ");
// let final = `'${result}'`;
//   return console.log(final);
// }

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");

// function highAndLow(numbers){
//   let x = numbers.split(' ').map(Number);
//   let highest = Math.max(...x);
//   let lowest = Math.min(...x);
//   return `'${highest} ${lowest}'`;

// }
// let y = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
// console.log(y);

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
//  Input will always be valid, i.e. no negative integers

var count_sheep = function(num){
if (typeOf(num) !== "number"){
    console.log("give positive number");
}

for (var i =1; i<=num ; i++){
console.log(i + "sheep.....");
}

}

count_sheep(4);