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

var title = [
  "the brave",
  "the visionary",
  "the destroyer of worlds",
  "the lover of walruses",
  "the poker of facebook",
  "the forgetter of names",
  "the lunch stealer",
  "the tearjerker",
  "the helping hand",
  "the slide writer",
  "the homework helper",
  "the sorcerer of syntax",
  "the watcher of paint",
  "the sneaky snacker",
  "the cutter of lines",
  "the coffee culprit"
]

var colors = [
  'hotpink',
  'orange',
  'fuchsia', 0,
  'lightblue', 0,
  'black',
  'palegoldenrod'
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
  var rand = students.splice([Math.floor(Math.random() * students.length - 1)],1); /* splice instead of slice to MODIFY original array */
    // console.log(rand);
  var randTitle = title.splice([Math.floor(Math.random() * title.length - 1)],1);
    // console.log(randTitle);
  var x = window.setInterval(() => { /* duration to adjust interval of colors onClick */ 
    if (colors[cur] === 'palegoldenrod') { /* loop for color selection */
      window.clearInterval(x);
      body.style.backgroundColor = colors[cur]
      cur = 0;
      choice.innerText = rand[0].toUpperCase() + ' ' + randTitle[0].toUpperCase(); /* uppercase for the output of rand */
    
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


