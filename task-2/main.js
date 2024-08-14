"use strict";

const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");
const openModalElement = document.querySelector(".button-open");
const closeModalElement = document.querySelector(".button-close");

openModalElement.onclick = function () {
  modalElement.style.display = "block";
  overlayElement.style.display = "block";
};

closeModalElement.onclick = function () {
  modalElement.style.display = "none";
  overlayElement.style.display = "none";
};
