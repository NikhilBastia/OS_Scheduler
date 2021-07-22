import { globalVar } from "../../config/globalVar";
import * as tabFunction from "../tabUtils";

const fcfsScheduling = document.querySelector(".nav__menu-item__FCFS");
const processFCFSRows = document.querySelector(".process__info-fcfs-box");
const btnAlgo = document.querySelector(".process__btn");

tabFunction.tabfunctionality();

export const displayFinalProcess = function (
  pid,
  arrival,
  burst,
  completion,
  waiting,
  turnaround
) {
  console.log("in displayFinalProcess");
  const html = `
    <div class="row process__row">
                <div class="col-md-3 process__desc">Process ${pid}</div>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-3 process__time">${arrival}</div>
                        <div class="col-md-3 process__time">${burst}</div>
                        <div class="col-md-3 process__time">${waiting}</div>
                        <div class="col-md-3 process__time">${turnaround}</div>
                    </div>
                </div>
            </div>
    `;
  processFCFSRows.insertAdjacentHTML("beforeend", html);
};

export const arrowHandler = function (publisher) {
  btnAlgo.addEventListener("click", function () {
    globalVar.btnAlgoClick++;
    let shouldCallAlgo =
      globalVar.btnAlgoClick === 1 &&
      globalVar.btnfcfsClick === 0 &&
      globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo)
      publisher(
        globalVar.processId,
        globalVar.arrivalTimes,
        globalVar.burstTimes
      );
  });
};

export const fcfsHandler = function (publisher) {
  fcfsScheduling.addEventListener("click", function () {
    globalVar.btnfcfsClick++;
    let shouldCallAlgo =
      globalVar.btnfcfsClick === 1 &&
      globalVar.btnAlgoClick === 0 &&
      globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo)
      publisher(
        globalVar.processId,
        globalVar.arrivalTimes,
        globalVar.burstTimes
      );
  });
};
