import { globalVar } from "../../config/globalVar";
import * as tabFunction from "../utilsView/tabUtils";

const processSJFPrRows = document.querySelector(".process__info-sjfpr-box");
const sjfScheduling = document.querySelector(".nav__menu-item__Sjf-pr");

tabFunction.tabfunctionality();

export const displaySjfPrProcess = function (
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
  processSJFPrRows.insertAdjacentHTML("beforeend", html);
};

export const sjfPreHandler = function (publisher) {
  sjfScheduling.addEventListener("click", function () {
    globalVar.btnSjfPremClick++;
    let shouldCallAlgo =
      globalVar.btnSjfPremClick === 1 && globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo)
      publisher(
        globalVar.processId,
        globalVar.burstTimes,
        globalVar.arrivalTimes
      );
  });
};
