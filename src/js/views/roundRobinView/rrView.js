import { globalVar } from "../../config/globalVar";
import * as tabFunction from "../utilsView/tabUtils";

const processRRRows = document.querySelector(".process__info-rr-box");
const rrScheduling = document.querySelector(".nav__menu-item__RR");

tabFunction.tabfunctionality();

export const displayRRProcess = function (
  pid,
  arrival,
  burst,
  waiting,
  turnaround
) {
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
  processRRRows.insertAdjacentHTML("beforeend", html);
};

export const roundRobinHandler = function (publisher) {
  rrScheduling.addEventListener("click", function () {
    globalVar.btnRRClick++;
    let shouldCallAlgo =
      globalVar.btnRRClick === 1 && globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo)
      publisher(
        globalVar.processId,
        globalVar.burstTimes,
        globalVar.quantum,
        globalVar.arrivalTimes
      );
  });
};
