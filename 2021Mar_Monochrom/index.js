var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var img = new Image();

window.onload = firstDraw();

function firstDraw() {
  //preload the demo image
  console.log('first load');
  var initialImageURL =
    'https://images.unsplash.com/photo-1610701144220-6f5da77f7248?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

  initialImageURL =
    'https://images.unsplash.com/photo-1500042600524-37ecb686c775?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

  draw(initialImageURL);
}

//takes any image URL and creates an un pixelated image /4 the orginal size of the image
function draw(imgURL) {
  // Specify the src to load the image
  img.crossOrigin = 'anonymous';
  img.src = imgURL;

  img.onload = function () {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    console.log('image draw');
    // pixelate();
  };
}

function pixelate() {
  //dynamically adjust canvas size to the size of the uploaded image
  canvas.height = img.height;
  canvas.width = img.width;

  /// if in play mode use that value, else use slider value
  var size = 1 * 0.01,
    /// cache scaled width and height
    w = canvas.width * size,
    h = canvas.height * size;

  /// draw original image to the scaled size
  ctx.drawImage(img, 0, 0, w, h);

  /// then draw that scaled image thumb back to fill canvas
  /// As smoothing is off the result will be pixelated
  ctx.mozImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}

function pick(event) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 100, 100);
  var data = pixel.data;

  console.log({ x, y });
  console.log(img.height);
  console.log(img.width);


  const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
  // console.log(pixel.data);
  // pixel.data[0] = 255 - pixel.data[0];
  // pixel.data[1] = 255 - pixel.data[1];
  // pixel.data[2] = 255 - pixel.data[2];
  // pixel.data[3] = 255;
var imgData = pixel;
  ctx.putImageData(imgData, 0, 0);

  // console.log(rgba);
}

canvas.addEventListener('mousemove', function (event) {
  pick(event);
});
