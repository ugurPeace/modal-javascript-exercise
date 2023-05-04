///
"use strict";
///
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosedModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const OpenModelFunc = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", OpenModelFunc);
//clode model function//
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close model//
btnClosedModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
