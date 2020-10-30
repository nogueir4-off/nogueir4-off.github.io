"use strict";

var imgs = document.getElementById('imgs');
var img = document.querySelectorAll('#imgs img');
var idx = 0;

function run() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = "translateX(".concat(-idx * 360, "px)");
}

setInterval(run, 2500);