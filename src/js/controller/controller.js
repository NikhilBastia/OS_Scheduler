// import { functions } from "lodash";
import * as displayProcessView from "../views/displayProcessView/dProcessView";
import * as modalView from "../views/utilsView/instModal";
import * as fcfsView from "../views/fcfsView/fcfsView";
import * as sjfPreView from "../views/sjfView/sjfPreView";
import * as sjfNonPreView from "../views/sjfView/sjfNPreView";
import * as roundRobinView from "../views/roundRobinView/rrView";
import * as prePriorityView from "../views/priorityView/prePriorityView";
import * as nonPrePriorityView from "../views/priorityView/nonPrePriorityView";
import * as fcfsModel from "../models/fcfsAlgo";
import * as sjfPreModel from "../models/sjfPreAlgo";
import * as sjfNonPreModel from "../models/sjfNPreAlgo";
import * as roundRobinModel from "../models/rrAlgo";
import * as prePriorityModel from "../models/prePriorityAlgo";
import * as nonPrePriorityModel from "../models/nonPrePriorityAlgo";

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

const sjfPreSchedulingController = function (
  processId,
  burstTimes,
  arrivalTimes
) {
  sjfPreModel.SjfPreemptive(
    processId,
    burstTimes,
    arrivalTimes,
    sjfPreView.displaySjfPrProcess
  );
};

const sjfNonPreController = function (processId, burstTimes, arrivalTimes) {
  sjfNonPreModel.SjfNonPreemptive(
    processId,
    burstTimes,
    arrivalTimes,
    sjfNonPreView.displaySjfNprprocess
  );
};

const roundRobinController = function (
  processId,
  burstTimes,
  quantum,
  arrivalTimes
) {
  roundRobinModel.roundRobin(
    processId,
    burstTimes,
    quantum,
    arrivalTimes,
    roundRobinView.displayRRProcess
  );
};

const prePriorityController = function (
  processId,
  burstTimes,
  priorities,
  arrivalTimes
) {
  prePriorityModel.priorityPremptive(
    processId,
    burstTimes,
    priorities,
    arrivalTimes,
    prePriorityView.displayPriorityPremptive
  );
};

const nonPrePriorityController = function (
  processId,
  burstTimes,
  priorities,
  arrivalTimes
) {
  nonPrePriorityModel.priorityNonPreemptive(
    processId,
    burstTimes,
    priorities,
    arrivalTimes,
    nonPrePriorityView.displayNonPriorityPremptive
  );
};

const init = function () {
  displayProcessView.displayProcessesHandler(displayProcessController);
  modalView.modalHandler();
  fcfsView.arrowHandler(fcfsSchedulingController);
  fcfsView.fcfsHandler(fcfsSchedulingController);
  sjfPreView.sjfPreHandler(sjfPreSchedulingController);
  sjfNonPreView.sjfNonPreHandler(sjfNonPreController);
  roundRobinView.roundRobinHandler(roundRobinController);
  prePriorityView.prePriorityHandler(prePriorityController);
  nonPrePriorityView.nonPrePriorityHandler(nonPrePriorityController);
};
init();
