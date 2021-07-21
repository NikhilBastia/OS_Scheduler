// import { functions } from "lodash";
import * as displayProcessView from "../views/displayProcessView/dProcessView";
import * as fcfsView from "../views/fcfsView";
import * as fcfsModel from "../models/fcfsAlgo";

const displayProcessController = function (arrivalTime, priority, burstTime) {
  displayProcessView.displayProcesses(arrivalTime, priority, burstTime);
};

const fcfsSchedulingController = function (
  processId,
  arrivalTimes,
  burstTimes
) {
  fcfsModel.FCFS(
    processId,
    arrivalTimes,
    burstTimes,
    fcfsView.displayFinalProcess
  );
};

const init = function () {
  displayProcessView.displayProcessesHandler(displayProcessController);
  fcfsView.fcfsHandler(fcfsSchedulingController);
};
init();
