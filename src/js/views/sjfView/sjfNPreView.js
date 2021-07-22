import { globalVar } from "../../config/globalVar";
import * as tabFunction from "../tabUtils";

const processSJFNPrRows = document.querySelector(".process__info-sjfnpr-box");
const sjfNScheduling = document.querySelector(".nav__menu-item__sjf-npr");

tabFunction.tabfunctionality();

export const displaySjfNprprocess = function (
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
  processSJFNPrRows.insertAdjacentHTML("beforeend", html);
};

export const sjfNonPreHandler = function (publisher) {
  sjfNScheduling.addEventListener("click", function () {
    globalVar.btnSjfNonPrClick++;
    let shouldCallAlgo =
      globalVar.btnSjfNonPrClick === 1 && globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo)
      publisher(
        globalVar.processId,
        globalVar.burstTimes,
        globalVar.arrivalTimes
      );
  });
};
