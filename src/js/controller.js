// import { functions } from "lodash";
import * as displayProcessView from "./views/displayProcessView/dProcessView";

const displayProcessController = function (arrivalTime, priority, burstTime) {
  displayProcessView.displayProcesses(arrivalTime, priority, burstTime);
};

const init = function () {
  displayProcessView.displayProcessesHandler(displayProcessController);
};
init();
