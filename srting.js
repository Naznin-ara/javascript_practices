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

function vowel(str){

    let vowel_list = "aeiouAEIOU";

    return str.includes(vowel_list) ? true : false;



}
let x = vowel("my name is silve");
console.log(x);