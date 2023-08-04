// function getDayName(date = new Date(), local = 'en-US'){

//     return date.toLocaleDateString(local, {weekday:'long'});

// }
// var date= new Date('1989-9-20');
// console.log(getDayName());
// task 1
// function reverse_number(n){
    
//     return n = String(n).split("").reverse().join("");
// }
// console.log(reverse_number(3084));
// task 2

// function isPalindrom(a){
// a_reverse = a.split("").reverse().join("");
// if(a == a_reverse){
//     console.log("It is palindrom string.")
// }else{
//     console.log("not palindrom")
// }

// }
// isPalindom("bobob");
// task3
// let str="webmaster";

// let str2=str.split("").sort().join("");

// console.log(str2);


// task 4

// function convert_new_string(str){

//     let str2 = str.split(" ");
//     let newarray =[];
    
//     str2.map((e)=>{
//         let str3 = e.charAt(0).toUpperCase()+e.slice(1);
//        newarray.push(str3);
        
//     })
//     return console.log(newarray.join(" "));
// } 
// convert_new_string("i am silve");
// convert_new_string("i am so happy because i solve this problem alhamdulillah. ")

// let str3= str.charAt(0).toUpperCase();

// task 5
// function find_long_word(str){
// let str2 = str.split(" ");
// let longest_word ="";
// for(var i=0; i<str2.length; i++){

// if(longest_word.length < str2[i].length){
//   longest_word = str2[i];

// }

// }

// return console.log(longest_word);
// }


// find_long_word("web development tutorial");

// task 6

// let str = "Alhamdulillah i can do it";
// let str2 = str.split("");
// let newarray =[];
// for(var i= 0; i< str2.length; i++){

// if(str2[i]== "a"|| str2[i]== "e"|| str2[i]== "i"||str2[i]== "o"|| str2[i]== "u" ){
//     newarray.push(str2[i]);
// }


// }
// console.log(newarray.length);

// task 6 2nd way
// let vowel_list ="aeiouAEIOU";
// let count = 0;
// function vowel_count(str){
// for(var i=0; i<str.length; i++){
// if(vowel_list.indexOf(str[i]) !== -1){
// count+=1;
// }


// }
// return console.log(count);

// }

// vowel_count("i am an women");

// task 7

// function primeNumber(n){
//    if(n==1){
//     return "it is not prime number";
//    }else if (n === 2){
//     return "It is prime number";
//    }else {
//     for(var i=2; i<n; i++){
//         if(n%i=== 0){
//             return "it is not prime number";
//         }else{
//             return "It is prime number";
//         }
//     }
//    }
// }


// console.log(primeNumber(47));

// task 8

// function matrix(n){
// for(var i=1; i<n; i++){
//     for (var j=1; j<n; j++){
//         if(i==j){
//             console.log("1");
//         }else{
//             console.log("0");
//         }
//     }

// }
// return console.log("....");
// }

// matrix(6);

// task 9
// function find_data_type(value){
//     if (typeof value == "string"){
//         console.log("string");
//     }else  if (typeof value == "number"){
//         console.log("number");
//     }else  if (typeof value == "boolean"){
//         console.log("boolean");
//     }else if (typeof value == "object"){
//         console.log("object");
//     }else  if (Array.isArray(value)){
//         console.log("array");
//     }else{
//         console.log("undefined")
//     }
// }
// let x =[2,1,2,6];
// find_data_type(x);
// task 10

// function find_number(input){
   
//    let sortNumber = input.sort(function(a,b){
//     return a-b
//    });
//    let newarray = sortNumber.reverse();
// for( var i = 0; i< newarray.length; i++){
//    var x= newarray[1];
//    var y = newarray[(i -1)]; 
   
// }
// console.log(newarray);
//  console.log( x + "is the second largest number");

// console.log(y + "is the second lowest number");

// }
// var x =[330, 460, 750, 100,147, 35,78,30,48,10,98,20];
// find_number(x);
 
// task 11

// function perfectNumber(input){
//     var newarray =[];
//     var total = 0;
    
// for ( var i = 0; i<= input/2; i++){
   
//     if(input % i == 0 && i !== input){
//      total+=i;
//     }

   
    
// }

// if(total == input){
//     console.log("it is a perfect number");
// }else{
//     console.log(" it is not a perfect number");
// }

 
// }

// perfectNumber(26);

// task 12

// function find_factor(value){
//     let factors =[];
//     value = parseInt(value);
// for(var i =0; i<= value; i++){

   
//     if(value%i == 0){
//         factors.push(i);
//     }
// }

// factors.sort((a,b) => a-b);
// return console.log(factors);


// }

// find_factor(76);


// task 13

// function exponent_your_number(b,n){

//     let result = Math.pow(b,n);
//     return result;
// }


// console.log(exponent_your_number(12,2));

// task 14



// function myFunction(str){
//     let len = str.length;
//   return str.slice(len-3);
// }

// let x = myFunction("defhilkghh");
// console.log(x);

// *******function extractUniqueCharacters(str) {
//     if (typeof str !== 'string') {
//       throw new Error('Input must be a valid string');
//     }
  
//     const uniqueCharacters = new Set(str);
//     return Array.from(uniqueCharacters);
//   }


// let str ="hello, here is me here e";
// let str2 =str.match(/[a-z]/i);
// console.log(str2);

//  remove same element of 1st array present in 2nd array
//  function prototype(integer_list, values_list){
  
// return integer_list.filter(e => {
//   return values_list.indexOf(e) == -1
// })
// }
// let x = prototype([2,3,8,1,2,1,3,1], [1,3,2]);
// console.log(x);
// function digitalRoot(n) {
//   // ...
//   let total = 0;
//   let x = String(n).split("").map(Number);
//   for(var i=0; i<x.length;i++){
//     total = total + x[i];
//   }
//   let y = String(total).split("").map(Number);
//   let total2 = 0;
//   for(var i=0; i<y.length;i++){
//    total2 = total2 + y[i];

//   }
  
//     let z= String(total2).split("").map(Number);
//     let total3 =0;
//     for(var i=0; i<z.length;i++){
//       if(total2>9){
//         return total3 = total3 + y[i];
//       }
     
//   }
//   return total2

// }

// let a = digitalRoot(493193);
// console.log(a);

// is 1st input contains last letters of 2nd input? 

// function solution(str, ending){
//   // TODO: complete
 
//   return str.endsWith(ending);
// }
// let x = solution("abcdef", "ef");
// console.log(x);




