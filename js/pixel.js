
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

function createEventListener(element){
  element.addEventListener('click', function(){
    console.log('hiii');
    element.style.backgroundColor = 'red';
  });
}

function createGrid(){
  for (var i = 0; i < 40; i++){
    pixelDiv = document.createElement('div');
    pixelDiv.className = "pixelDiv";
    pixelDiv.id = "pix" + i;
    for (var j = 0; j < 40; j++) {
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