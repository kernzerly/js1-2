// function createRow() {
//   const row = document.createElement('div');
//   row.classList.add('row');
//   for(let i = 5; i > 0; i--) {
//     let column = document.createElement('div')
//     column.classList.add('col-md-2');
//     column.classList.add('column');
//user input element
// dom manipulation
//  net ninja
// traversy media add item lister changing style individual li's
//     row.appendChild(column);
//   }
//   return row;
// }
//
// let bob = createRow();
// console.log(bob);
//
//
//
// document.getElementById("myBtn").addEventListener("click", displayDate);
//
// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
// }
//
// var i;

// for (i=0; i<10; i++) {
// 	if (i > 5)
let addInput = document.querySelector(".newaddTask");
let addButton = document.querySelector(".addButton");
let toDoList = document.querySelector(".todoList");

addButton.addEventListener("click", (e)=>{
  console.log('hit');
  let input = addInput.value;

  if (input === '') {
    alert("you must write somethng")
  } else {
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    let item = document.createElement("input");
    item.type = "text";
    item.value = input;
    let editButton = document.createElement("button");  //edit button
    let trashButton = document.createElement("button");
    trashButton.classList.add('trash-button');
    //delete button
  // my input
    editButton.innerText="Edit"; //inner text encodes special characters
    trashButton.innerText="trash";
    toDoList.appendChild(li)
    li.appendChild(checkBox);
    li.appendChild(item);
    // li.appendChild(editInput);
    li.appendChild(editButton);
    li.appendChild(trashButton);
    addInput.value = "";
    trashButton.addEventListener('click', function(e) {
      toDoList.removeChild(li);
    });
  }
});
// Click on a close button to hide the current list item
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
