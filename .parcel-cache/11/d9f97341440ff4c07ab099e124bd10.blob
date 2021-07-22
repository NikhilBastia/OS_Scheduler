var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "modalHandler", function () {
  return modalHandler;
});
const instruction = document.querySelector(".instruction");
const modal = document.querySelector(".modal-view");
const btnCloseModal = document.querySelector(".close-modal");
const btnGotIt = document.querySelector(".got__instr");
const modalHandler = function () {
  instruction.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.remove("hidden");
  });
  btnCloseModal.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("hidden");
  });
  btnGotIt.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("hidden");
  });
};
