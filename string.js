// ******find largest word from an array


// function find_largest_word(array){
// let largest_word = array[0];
// for(let i = 0 ; i < array.length; i++){
//   if (largest_word.length < array[i].length){
//     largest_word = array[i];
//   }
// }
// return largest_word;


// }
// let name = ["aminul islam", "wafa maryam", "fatima nur", "iffat zuairia", "naznin ara"];
// let boro_nam = find_largest_word(name);
// console.log(boro_nam);


// ** reverse sentence and also reverse each word.

// function reverse_setence(str){
// let str2 = str.split("  ");
// let str3;
// for (var i =0; i<=str2.length; i++){
//   str3 = str2[i].split("").reverse().join(""); 
// return str3; 
// }


// }
//  let x =reverse_sentence("double spaces");
// console.log(x);

// *** reverse each word in the sentence.

// function myFunction(str){
// str = str.split("   ");
// let a;
// let b;
// str.map(e => {
//   a = e.split("").reverse().join("");
//  b = a.split(" ").reverse().join("  ");
// })
// return b;



// }

// let x =myFunction("double  spaced  words");
//  console.log(x);

// find number of vowel in the sentence

// function vowel(str){

//    let count =0;
//     // let newarray=[];
//     for (var i=0; i<str.length; i++){
        
//     if(str[i].match(/[aeiou]/i)){
//     // newarray.push(str[i]);
//     count++;
//      }

//     }

//     return count;
//     // return newarray.length;


// }
// let x = vowel("I love my country so much besause i m bangladeshi");
// console.log(x);



// remove common letter between two str.

// function myFunction(str1, str2){

// let str3 = str1.split("");
// let str4 = str2.split("");
// let newarray =[];
// str3.map ( e => {
//      if(!str4.includes(e)){
//         newarray.push(e);
//      }; 
// })
// // let result = newarray.join("").split(" ");
// // return result.join('');
// return newarray.join('');
// }

// let x = myFunction("I am an women and i love my family", "aodwnv");
// console.log(x);