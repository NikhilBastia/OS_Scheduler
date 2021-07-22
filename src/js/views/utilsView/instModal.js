const instruction = document.querySelector(".instruction");
const modal = document.querySelector(".modal-view");
const btnCloseModal = document.querySelector(".close-modal");

export const modalHandler = function () {
  instruction.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.remove("hidden");
  });

  btnCloseModal.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("hidden");
  });
};
