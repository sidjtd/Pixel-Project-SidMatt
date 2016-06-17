
var mainDiv = document.getElementById('mainDiv');

headDiv = document.createElement('div');
headDiv.id = 'headDiv';
mainDiv.appendChild(headDiv);

headSpan1 = document.createElement('span');
headSpan2 = document.createElement('span');
headSpan1.id = 'headSpan1';
headSpan2.id = 'headSpan2';
headSpan1.innerHTML = 'SPAN1';
headSpan2.innerHTML = 'SPAN2';
headDiv.appendChild(headSpan1);
headDiv.appendChild(headSpan2);

paintToolBar = document.createElement('div');
paintToolBar.id = 'paintToolBar';
mainDiv.appendChild(paintToolBar);

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


var pixelDiv;
var pixelBox;

var colorArray = ['red', 'orange', 'yellow', 'lightgreen', 'green', 'blue', 'purple',"Aqua","Aquamarine","Azure","Black"];
//var colorArray2 = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

//Ask teacher: why would the existence of an object break the code?
/*var colors = {
  _red : red,
  _blue: blue,
  _green: green,
  _yellow: yellow
}
*/

var colorHolder = 'orange';

function createEventListener(element){
  element.addEventListener('click', function(){
    element.style.backgroundColor = colorHolder;
  });
}

function colorBoxes(element, color){
  element = document.createElement('div');
  element.className = "colorbox";
  element.id = "color"+color;
  element.style.backgroundColor = color;
  colorDiv.appendChild(element);
  console.log("what");
  element.addEventListener('click', function(){
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
      createEventListener(pixelBox);
      pixelDiv.appendChild(pixelBox);
    }
  drawDiv.appendChild(pixelDiv);
  }
}
createGrid();
//colorBoxes('div', 'green');
//colorBoxes('div', 'red');


for(var j = 0; j<colorArray.length; j++){
colorBoxes('div', colorArray[j]);
}