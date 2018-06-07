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
