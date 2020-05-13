var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "img/1.jpg";

imgArray[1] = new Image();
imgArray[1].src = "img/2.jpg";

imgArray[2] = new Image();
imgArray[2].src = "img/3.jpg";

imgArray[3] = new Image();
imgArray[3].src = "img/4.jpg";

imgArray[4] = new Image();
imgArray[4].src = "img/5.jpg";

imgArray[5] = new Image();
imgArray[5].src = "img/6.jpg";

imgArray[6] = new Image();
imgArray[6].src = "img/7.jpg";

imgArray[7] = new Image();
imgArray[7].src = "img/8.jpg";

imgArray[8] = new Image();
imgArray[8].src = "img/9.jpg";

imgArray[9] = new Image();
imgArray[9].src = "img/10.jpg";

var imgArray5 = [];
var position;

function start() {
  var arrayNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var randomNums = [];
  i = arrayNums.length;
  j = 0;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    randomNums.push(arrayNums[j]);
    arrayNums.splice(j, 1);
  }
  for (var n = 0; n < 5; n++) {
    imgArray5[n] = randomNums[n];
  }
  deactivateprev();
  activatenext();
  position = 0;
  document.getElementById("image").src = imgArray[imgArray5[position]].src;
}

function next() {
  document.getElementById("image").style.marginLeft ="0px";
  if (position < 4) {
    activateprev();
    position++;
    document.getElementById("image").src = imgArray[imgArray5[position]].src;
    for (var i = 0; i <= 908; i++) {
      document.getElementById("image").style.marginLeft = i + "px";
    }
  }
  if (position == 4) {
    deactivatenext();
  }
}

function prev() {
  if (position > 0) {
    activatenext();
    position--;
    document.getElementById("image").src = imgArray[imgArray5[position]].src;
    for (var i = 908; i >= -908; i--) {
      document.getElementById("image").style.marginLeft = i + "px";
    }
  }
  if (position == 0) {
    deactivateprev();
  }
}

function deactivateprev() {
  document.getElementById("btn-prev").disabled = true;
  document.getElementById("btn-prev").style.opacity = "0.2";
}

function activateprev() {
  document.getElementById("btn-prev").disabled = false;
  document.getElementById("btn-prev").style.opacity = "1";
}

function deactivatenext() {
  document.getElementById("btn-next").disabled = true;
  document.getElementById("btn-next").style.opacity = "0.2";
}

function activatenext() {
  document.getElementById("btn-next").disabled = false;
  document.getElementById("btn-next").style.opacity = "1";
}