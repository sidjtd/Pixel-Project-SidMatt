
// Load the main
var mainDiv = document.getElementById('mainDiv');
//-----------------------------------------------------
//The following code is a prototype to dynamically creating the
//divs. It is currently in progress. Keep if possible!
// var headDiv;
// var paintToolBar;
// var x;

// var divCreatorArray=[['div',headDiv,mainDiv],['div',paintToolBar,mainDiv],[x],[x],[x],[x],[x],[x],[x]];

// function divCreator(element, newname, appendto){
// newname = document.createElement('div');
// newname.id = newname+'Div';
// mainDiv.appendChild(newname);
// }
// divCreator(divCreatorArray[0]);
//-----------------------------------------------------
headDiv = document.createElement('div');
headDiv.id = 'headDiv';
mainDiv.appendChild(headDiv);

paintToolBar = document.createElement('div');
paintToolBar.id = 'paintToolBar';
mainDiv.appendChild(paintToolBar);

headSpan1 = document.createElement('span');
headSpan2 = document.createElement('span');
headSpan1.id = 'headSpan1';
headSpan2.id = 'headSpan2';
headSpan1.innerHTML = 'SPAN1';
headSpan2.innerHTML = 'SPAN2';
headDiv.appendChild(headSpan1);
headDiv.appendChild(headSpan2);

toolsDiv = document.createElement('div');
colorDiv = document.createElement('div');
toolsDiv.id = 'toolsDiv';
colorDiv.id = 'colorDiv';

toolsDiv.innerHTML = 'Tools';
colorDiv.innerHTML = 'Colors';
paintToolBar.appendChild(toolsDiv);
paintToolBar.appendChild(colorDiv);

drawDiv = document.createElement('div');
drawDiv.id = "draw";
mainDiv.appendChild(drawDiv);

//The array that feeds into color pallete generating for loop
var colorArray = ['red', 'orange', 'yellow', 'lightgreen', 'green', 'blue', 'purple',"Aqua","Aquamarine","Azure","Black"];

var colorHolder = 'black';
var pixelBox;
var pixelDiv;

function createClickListener(element){
  element.addEventListener('click', function(){
    painting();
  });
}

// Make each Color Pallete
function colorBoxes(element, color){
  element = document.createElement('div');
  element.className = "colorbox";
  element.id = "color"+color;
  element.style.backgroundColor = color;
  colorDiv.appendChild(element);
  element.addEventListener('click', function(){
    console.log("color: ",color);
    console.log("color Holder is also now",colorHolder);
  colorHolder = color;
    console.log("color Holder is also now",colorHolder);

    //If you uncomment below, you can paint the unexpected.
    element.style.backgroundColor = colorHolder;
    //return colorHolder;
  });
}

function createGrid(){
  for (var i = 0; i < 41; i++){
    pixelDiv = document.createElement('div');
    pixelDiv.className = "pixelDiv";
    pixelDiv.id = "pix" + i;
    for (var j = 0; j < 41; j++) {
      pixelBox = document.createElement('span');
      pixelBox.className = "pixelBox";
      pixelBox.id = "pix" + i + j;
      createClickListener(pixelBox);
      pixelDiv.appendChild(pixelBox);
    }
  drawDiv.appendChild(pixelDiv);
  }
}



function painting(){
  console.log("painting!!!");
  document.getElementById("colorDiv").style.color = "'"+colorHolder+"'";
}

//The Grid is created
createGrid();

//ForLoop dynamically creates Color Pallete
for(var j = 0; j<colorArray.length; j++){
colorBoxes('div', colorArray[j]);
}

// function isHover(div) {
//   console.log((querySelector(':hover')));
//   return (div.querySelector(':hover') === div);
// }
// setInterval(function() {
//   console.log(isHover(document.getElementById('div')));
// }, 500);