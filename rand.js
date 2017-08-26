var pickButton;
var header;
var body;
var choice;
var aList;

var students = [
  "Kevin",
  "Jonathan",
  "Angel",
  "Eric",
  "Janette",
  "Desmond",
  "Ashiya",
  "Monica",
  "Susana",
  "Deborah",
  "Thomas",
  "Julissa",
  "Kyla",
  "John",
  "Shonica",
  "Krystal"
];

var colors = [
  'hotpink',
  'orange',
  'fuchsia', 0,
  'lightblue', 0,
  'black'
];
var cur = 0;


document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  choice = document.getElementById('choice');
  aList = document.getElementById('aList');
  newButton = document.getElementById('newButton');

  pickButton.addEventListener('click', pickOnClick );
  newButton.addEventListener('click', newButton2);
  aList.addEventListener('click', aListOnClick );

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let li = document.createElement('li');
    li.innerText = students[i];
    aList.append(li);
  }
});

var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students.splice([Math.floor(Math.random() * students.length)],1); /* splice instead of slice to MODIFY original array */
  var x = window.setInterval(() => { /* duration to adjust interval of colors onClick */ 
    if (colors[cur] === undefined) { /* loop for color selection */
      window.clearInterval(x);
      cur = 0;
      choice.innerText = rand;
      return;
    } 
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}

var aListOnClick = function (event) { /* edit of aList on dom */
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
  }
}

var newButton2 = function (event){
  alert("just chilling dude!")
}

