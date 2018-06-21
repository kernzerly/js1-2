function createRow() {
  const row = document.createElement('div');
  row.classList.add('row');
  for(let i = 5; i > 0; i--) {
    let column = document.createElement('div')
    column.classList.add('col-md-2');
    column.classList.add('column');
//user input element
// dom manipulation
//  net ninja
// traversy media add item lister changing style individual li's
    row.appendChild(column);
  }
  return row;
}

let bob = createRow();
console.log(bob);

<input type="button" value="Click Me">

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

var i;

// for (i=0; i<10; i++) {
// 	if (i > 5)
