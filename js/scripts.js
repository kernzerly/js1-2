let button = document.querySelector('button');
let div = document.querySelector('div');
let body =document.querySelector('body')
button.addEventListener('click', e => {
  e.target.textcontent = "Goodbye cats!!";
})
div.innerHTML = "<p> lorem ipsum dolores cantu!!!</p>";

let newH1 = document.createElement('h1');
newH1.textContent = 'Login here!!';
// body.appendChild(newH1)
console.log(newH1);
body.insertBefore(newH1, div);
// body.appendChild(newH1);

div.id = "red_text";

div.classList.add('text-center');
div.addEventListener('click',e => {
  div.classList.toggle('text-center');
  div.classList.replace('blue-background', 'green-background');
});
myImg =
document.createElement('img');
myImg.setAttribute('src','https://premierpoolsandspas.com/wp-content/uploads/2014/11/freeform-swimming-pools-008.jpg')
div.appendChild(myImg);
// newH1.className = "text-center";
// body.inserBefore()



for (var i = 1; i =< 100; i++) {
    let p =document.createElement('p');
  if(i % 3 === 0 && i % 5 ===0) {
    p.textContent = 'FizzBuzz';
    else if(i % 5===0){
      p.textcontent = 'Buzz';
      //do some stuff
      { else if (i % 3 === 0)}
      p.textContent = i;
    }
    body.appendChild(p);

    }

    if(i )
  }
    console.log(points[i]);
    if
  }
