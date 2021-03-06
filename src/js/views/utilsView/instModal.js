const instruction = document.querySelector(".instruction");
const modal = document.querySelector(".modal-view");
const btnCloseModal = document.querySelector(".close-modal");
const btnGotIt = document.querySelector(".got__instr");

export const modalHandler = function () {
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
