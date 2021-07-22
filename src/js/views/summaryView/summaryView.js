import { globalVar } from "../../config/globalVar";
import * as chartView from "./chartView";

const processAvgTTRows = document.querySelector(".process__info-avg-tt-box");
const btnSummary = document.querySelector(".summary__btn");
const btnSort = document.querySelector(".sort__btn");

export const displayAvgTt = function (sort = false) {
  processAvgTTRows.innerHTML = "";

  if (sort) {
    const sortedavgTtimes = globalVar.avgTurnaroundTimes
      .slice()
      .sort((a, b) => a.Avgtt - b.Avgtt);
    var minAvgtt = sortedavgTtimes[0].Avgtt;
    sortedavgTtimes.forEach(function (sortedavgTtime) {
      if (minAvgtt === sortedavgTtime.Avgtt) {
        var html = `
            <div class="row process__row process__row--effective">
              <div class="col-md-6 process__desc process__desc--color">${
                sortedavgTtime.Process
              } Scheduling</div>
              <div class="col-md-6 process__time">${+sortedavgTtime.Avgtt.toFixed(
                2
              )}s</div>
            </div>
            `;
      } else {
        var html = `
            <div class="row process__row">
              <div class="col-md-6 process__desc">${
                sortedavgTtime.Process
              } Scheduling</div>
              <div class="col-md-6 process__time">${+sortedavgTtime.Avgtt.toFixed(
                2
              )}s</div>
            </div>
            `;
      }
      processAvgTTRows.insertAdjacentHTML("beforeend", html);
    });
  }
  if (!sort) {
    globalVar.avgTurnaroundTimes.forEach(function (avgTurnaroundTime) {
      var html = `
        <div class="row process__row">
        <div class="col-md-6 process__desc">${
          avgTurnaroundTime.Process
        } Scheduling</div>
              <div class="col-md-6 process__time">${+avgTurnaroundTime.Avgtt.toFixed(
                2
              )}s</div>
                </div>
                `;
      processAvgTTRows.insertAdjacentHTML("beforeend", html);
    });
  }
};

export const summaryHandler = function (publisher) {
  btnSummary.addEventListener("click", function () {
    globalVar.btnSummaryClick++;
    let shouldCallAlgos = globalVar.btnSummaryClick === 1;

    if (shouldCallAlgos) {
      publisher(
        globalVar.processId,
        globalVar.arrivalTimes,
        globalVar.burstTimes,
        globalVar.priorities,
        globalVar.quantum
      );
    }
    displayAvgTt();
    chartView.displayChart();
  });

  btnSort.addEventListener("click", function (event) {
    event.preventDefault();
    displayAvgTt(!globalVar.sorted);
    globalVar.sorted = !globalVar.sorted;
  });
};
