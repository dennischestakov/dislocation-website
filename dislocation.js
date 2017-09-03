function cubeFall() {
  var cube = document.getElementById('cube');

  var cubePos = cube.offsetTop;

  cube.style.top = (cubePos + 0.5) + 'px';

  if (cubePos > screen.height) {
    cube.style.top = -200 + 'px';
  }
}

function cubeFall2() {
  var cube = document.getElementById('cube2');

  var cubePos = cube.offsetTop;

  cube.style.top = (cubePos + 0.5) + 'px';

  if (cubePos > screen.height) {
    cube.style.top = -200 + 'px';
  }
}

function startLoop() {
  var cube = document.getElementById('cube');

  setInterval(cubeFall, 10);
  setInterval(cubeFall2, 10);
}
