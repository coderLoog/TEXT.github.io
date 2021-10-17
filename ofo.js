var eyeLeftPosition = {
  start: [70, 78],
  end: [100, 110]
};

var eyeRightPosition = {
  start: [150, 78],
  end: [190, 110]
};

var eyeLeftCenterPosition = {
  x: (eyeLeftPosition.end[0] - eyeLeftPosition.start[0]) / 2 + eyeLeftPosition.start[0],
  y: (eyeLeftPosition.end[1] - eyeLeftPosition.start[1]) / 2 + eyeLeftPosition.start[1]
};

var eyeRightCenterPosition = {
  x: (eyeRightPosition.end[0] - eyeRightPosition.start[0]) / 2 + eyeRightPosition.start[0],
  y: (eyeRightPosition.end[1] - eyeRightPosition.start[1]) / 2 + eyeRightPosition.start[1]
};

var r = 30;

var eyeLeft = document.querySelector('#eyeLeft');
var eyeRight = document.querySelector('#eyeRight');

if (window.DeviceOrientationEvent) {

  window.addEventListener('deviceorientation', function (event) {

    let {alpha, beta, gamma} = event;

    eyeLeft.style.left = eyeLeftCenterPosition.x + gamma / 90 * r + 'px';
    eyeRight.style.left = eyeRightCenterPosition.x + gamma / 90 * r + 'px';
    eyeLeft.style.top = eyeRight.style.top 
                      = eyeLeftCenterPosition.y + beta / 180 * r + 'px';

    eyeRight.style.transform = eyeLeft.style.transform 
                         = eyeRight.style.WebkitTransform 
                         = eyeLeft.style.WebkitTransform 
                         = 'rotate(' + beta + 'deg)';
  }, false);
} else {
  document.querySelector('body').innerHTML = '浏览器不支持DeviceOrientationEvent';
}