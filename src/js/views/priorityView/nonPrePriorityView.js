import { globalVar } from "../../config/globalVar";
import * as tabFunction from "../utilsView/tabUtils";

const processNonPriorityRows = document.getElementById(
  "process__info-non-priority-box"
);
const priorityNScheduling = document.querySelector(".nav__menu-item__prio-npr");

tabFunction.tabfunctionality();

export const displayNonPriorityPremptive = function (
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
  processNonPriorityRows.insertAdjacentHTML("beforeend", html);
};

export const nonPrePriorityHandler = function (publisher) {
  priorityNScheduling.addEventListener("click", function () {
    globalVar.btnpriorityNonPrempClick++;
    let shouldCallAlgo =
      globalVar.btnpriorityNonPrempClick === 1 &&
      globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo)
      publisher(
        globalVar.processId,
        globalVar.burstTimes,
        globalVar.priorities,
        globalVar.arrivalTimes
      );
  });
};
