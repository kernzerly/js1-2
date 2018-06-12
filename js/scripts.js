// create a program that..
// let firsName = prompt("Whats you name?","John");
// console.log(firstName);
// let LastName = prompt("What you last name?", "Doe");
// alert(lastName);
// alert(lastName);
// let birthday = prompt("Whats your birthday?', "May 21 1980");
// confirm("Is " + birthday + " your birthday?");
// confirm(`Is $(birthday) your birthday?``); //es6
// let birthday = "nov"
// confirm(`Is $(birthday) your birthday?`)


// const name = "");//truthy or true ryker
// const age = 23;//falsey or false
//
// if(!name) {
//   alert('one exists');
// }
// if(!name || age){
//   alert('one exists');
// }



// let arr = ['It is a mad mad mad mad world', 8, true, 1972];
// conslole.log(favs, favs.length);
//
// //try it out #1
// let favs = ["Rogue One", 51, true, 2004];
// console.log(Array.isArray(favs));

// var toDoItems = ['reedley job', 'visalia lead', 'layout Kathy Spa'];
// var acitivites= toDoItems[toDoItems.length - 1];
// console.log(acitivites);
//
// const products = [["blanket", 12.99, "The best blanket around."], ['rattlw', 4.99, "It rattles man..."]];
//
// let favMovies = ['Help', 'Koch', 'starwars', 'rocky', 'bridge of the river koi']
// let
//
// console.log(movies.length);
// var first = favMovies[0];
//
// favMovies.forEach(function(item, index, array) {
//   console.log(item, index);
// });
// Apple

// 2

// let favMorie = ["Empire Strikes Back", "Darth Vader"];
// let secondFave = ["Return of the king", "Bill the Pony"];
// let thirdFav = ["The room", "Lisa"];
// let favoriteMovies = [];
//
// let products = [["b;amlet', [12.99], "The best blanket around]]
// let i = 0;  //control statement
// while (i < products.length) { //parameters}
// while  (i < 3) { //parameters
//   console.log(i, 'inside the loop');
//   console.log(products[o]);
//
//   i++; //Incrementor
//
// }
// // for(let i = 0; i < products.length; i++) {
// //   console.log(products[i]);
//   // var reversed = products.reverse();
//
// //}
// let i = 0;
// let newProduct = ["Sqeeky toy", 19.99, "Really good toy."];
// do [
//   //add newproduct to the second member of product Arrayi++;
// } while(i <products.length);
// products.push('');
// if(i===1) products[i].push(newProduct);//add newproduct to the seconnd member of products array
// i++;
// } while(i < products.length);
// console.log(products);
//
// product.forEach((product)=>)
//
//
// for(let i =0; i <= 3; i++){
//   console.log()
// }
// while(i < 3){
//   console.log(i);
// }
// let numbers = [1,2,3];
// numbers.forEach(function)(number){
//   console.log(number);
//   let newTask = document.createElement("li")
// });
// let task1 = 1;
// let task2 = 2;
// let task3 = 3;
// if(task1 == 1 && task2 == 2 && task3 == 3)
// console.log("JS homework" + "startup solar" + "demo spa");
//
// for(let i = products.length - 1 ;i >= 0; i--) {
//   console.log(products[i]);
//   // var reversed = products.reverse();
//
// }
//Functions
// console.log("Hello World");

// function capitalCase(string){ //function definition
//   let words = string.split("");
//   words.forEach(word => {
//     let letters = word.split('');
//     let capped = letters[0].toUppercase();
//     letters.splice(0, 1, capped);
//     // word.split('')[0].toUpperCase();
//
//   });
//
//   return string.toUpperCase();
// };
// let newString = capitalCase("peter piper"); //function Call
// console.log(newString);
// let capsName = capitalCase("peter piper");
// // array.pop();
// function myCool(){}

function dogYears(a) {
  alert(a*7)
}
dogYears(2);
// console.log(dogYears(2))

// multiply(5); // 5

function supplyForLife(age,product) {
  let death = 80;
  let timeLeft = death - age;
  let daysLeft = 365 * timeLeft;
  let allProduct = daysLeft * product;
  alert(`you will need ${allProduct} to last you to ${death}`)
}

supplyForLife(23,1)
//creates an array of things you need or want to do this
let todo1 = {prompt("what do you want to dot first"
"eat"?)}
let todo2 = [prompt("wht do you want to do second?",
"eat")]
let todo3 = [prompt("what do you want to do third?",
"eat")];
//this is a goo place for edge casing
todos.push(todo1, todo2, todo3);
todos.push(todo2)  // more time
//step 2
for(let i = 0; i < todos.length; i++) {
  let timeline = prompt(`how many days will it take to get $(todos[i]} done?` , 2);
  timeline =
  !isNaN(parseInt(timeline)) //inside terinary
   ?
  parseInt(timeLine)
  :
  2 ; //didactic error checking
  todos[i].unshift(timeLine);
}//console.log(todos, 'after adding time it will take');
todos.sort();
console.log(todos, 'after sort');
console.lot(todos, 'after adding time it will take');
//using a while loop, find the task that will take the longest and log it to the console
let longest = todos[0];
let j = 0;
while(j < todos.length) [
if(todos[j][0] > longest[0] longest = todos[j];
//valid iline if statement
//longest = todos[j][0] > longest
 j++;
}
longest.push('this');

 //using a do while loop add the strings that will take the longest
 let z = 0;
 do {
   if(todos[z][todos[z].length - 1]
      !== "this") {
        todos[z].push('done');
   }
   z++;
 }while(z < todos.length);
 let doneItems = [];
 todos.forEach(
   todo => {
     if(todo[todo.length - 1] === 'done')
     doneItems.push(todo);
   }
 );
alert(doneItems);

//try it out #2
function lifetimeCalculator(age, dailyUse) {
  if(!isNaN(age) && !isNan(dailyUse)) {
    const deat = 80;
    retern (deat - age) * (dailyUse * 365);
  } else {
    userAge = prompt('how old are you?', '30');
    userUse = prompt("How much do you use every day?",
'1');
let userAge = lifetimeCalculator(parseInt(userAge),
parseInt(userUse)


  }
  }
}
//on your takehome-day5 branch write a program that uses functions to:
function evaNum(num){
  let num = prompt('Please enter a number');
  if ((!isNan(num)) {
    //take a number and return the square of that number (power of 2)
    alert(num*num);
  } else {
    //if a non-number argument is passed into the function, alert NaN and prompt for another response
    alert(NaN);
    evalnum();
  }
};
evalNum();
//In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
function capital() {
  let answer = prompt("Please enter a word");
  let firstLetter = answer.charAt(0).toUpperCase();
  let restOfWord = answer.slice(1);
  let cap = (firstLetter + restOfWord).toString();
  console.log(cap);
}

capital()
