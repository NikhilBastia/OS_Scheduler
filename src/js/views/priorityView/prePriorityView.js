import { globalVar } from "../../config/globalVar";
import * as tabFunction from "../utilsView/tabUtils";

const processPriorityRows = document.getElementById(
  "process__info-priority-box"
);

const priorityScheduling = document.querySelector(".nav__menu-item__prio-pr");

tabFunction.tabfunctionality();

export const displayPriorityPremptive = function (
  pid,
  arrival,
  burst,
  priority,
  waiting,
  turnaround
) {
  const html = `
      <div class="row process__row">
          <div class="col-md-2 process__desc">Process ${pid}</div>
          <div class="col-md-2 process__time">${arrival}</div>
          <div class="col-md-2 process__time">${burst}</div>
          <div class="col-md-2 process__time">${priority}</div>
          <div class="col-md-2 process__time">${waiting}</div>
          <div class="col-md-2 process__time">${turnaround}</div>
      </div>
      `;
  processPriorityRows.insertAdjacentHTML("beforeend", html);
};

export const prePriorityHandler = function (publisher) {
  priorityScheduling.addEventListener("click", function () {
    globalVar.btnpriorityPrempClick++;
    let shouldCallAlgo =
      globalVar.btnpriorityPrempClick === 1 && globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo)
      publisher(
        globalVar.processId,
        globalVar.burstTimes,
        globalVar.priorities,
        globalVar.arrivalTimes
      );
  });
};
