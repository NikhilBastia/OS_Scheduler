const processInfoRows = document.querySelector(".process__info-initial-box");
const btnForm = document.querySelector(".form__btn");

const errorElement = document.getElementById("error");
const exclamationMark = document.querySelector(".exclamation__img");

const inputArrival = document.querySelector(".form__input--arrival");
const inputPriority = document.querySelector(".form__input--priority");
const inputBurst = document.querySelector(".form__input--burst");
const inputQuantum = document.querySelector(".form__input--quantum");

let i = 1,
  pid = 1, //For displayFinalProcess Function
  arrivalTimes = [],
  priorities = [],
  processId = [],
  burstTimes = [];

export const displayProcesses = function (arrival, priority, burst) {
  const html = `
          <div class="row process__row">
              <div class="col-md-3 process__desc">Process ${i}</div>
              <div class="col-md-3 process__time">${arrival}</div>
              <div class="col-md-3 process__time">${priority}</div>
              <div class="col-md-3 process__time">${burst}</div>
          </div>
      `;
  processInfoRows.insertAdjacentHTML("beforeend", html);
  i += 1;
};

export const displayProcessesHandler = function (publisher) {
  btnForm.addEventListener("click", function (event) {
    event.preventDefault();
    let errorMsgs = [];
    errorElement.innerText = "";
    exclamationMark.classList.add("hidden");

    const arrivalTime = Number(inputArrival.value);
    const priority = Number(inputPriority.value);
    const burstTime = Number(inputBurst.value);
    const quantum = Number(inputQuantum.value);

    const pushError =
      inputArrival.value === "" ||
      inputBurst.value === "" ||
      inputQuantum.value === "";

    if (pushError) {
      errorMsgs.push("Please fill all the inputs");
      errorElement.innerText = errorMsgs[0];
      exclamationMark.classList.remove("hidden");
    } else {
      console.log("in else part");
      arrivalTimes.push(arrivalTime);
      priorities.push(priority);
      burstTimes.push(burstTime);
      processId.push(pid);

      pid += 1;
      publisher(arrivalTime, priority, burstTime);
      inputArrival.value = inputBurst.value = inputPriority.value = "";
    }
  });
};