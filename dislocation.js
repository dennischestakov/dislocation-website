function cubeFall() {
  var cube = document.getElementById('cube');
  var footer = document.getElementById('license');

  var cubePos = cube.offsetTop;

  cube.style.top = (cubePos + 0.5) + 'px';

  if (cubePos > footer.offsetTop) {
    cube.style.top = -200 + 'px';
  }
}

function cubeFall2() {
  var cube = document.getElementById('cube2');
  var footer = document.getElementById('license');

  var cubePos = cube.offsetTop;

  cube.style.top = (cubePos + 0.5) + 'px';

  if (cubePos > footer.offsetTop) {
    cube.style.top = -200 + 'px';
  }
}

function startLoop() {
  setInterval(cubeFall, 10);
  setInterval(cubeFall2, 10);
}
