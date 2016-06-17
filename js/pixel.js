var mainDiv = document.getElementById('mainDiv');
console.log("Yo");
  drawDiv = document.createElement('div');
      drawDiv.className = "draw";
      mainDiv.appendChild(drawDiv);

  for (var i = 1; i<=20006; i++){
            pixelBox = document.createElement('div');
            pixelBox.className = "pixelBox";
            pixelBox.id = "pix"+i;
            //pixelBox.innerHTML = 'Test';
            mainDiv.appendChild(pixelBox);
      }

