"use strict";

const buttonElements = document.getElementById("buttonSwitch");
const redLightElement = document.getElementById("redLight");
const yellowLightElement = document.getElementById("yellowLight");
const greenLightElement = document.getElementById("greenLight");

let state = 0;
buttonElements.onclick = function () {
  if (state === 0) {
    redLightElement.classList.remove("red");
    yellowLightElement.classList.add("yellow");
    state++;
  } else if (state === 1) {
    yellowLightElement.classList.remove("yellow");
    greenLightElement.classList.add("green");    
    state++;
  } else {
    greenLightElement.classList.remove("green");
    redLightElement.classList.add("red");
    state = 0;
  }
};