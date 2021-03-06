import { globalVar } from "../config/globalVar";

export const FCFS = function (
  processID,
  arrivalTime,
  burstTime,
  publisherView
) {
  let objCollection = [],
    AT = [],
    BT = [],
    Pid = [],
    completion,
    turnaround,
    waiting,
    att = [],
    awt = [],
    avgTt,
    avgWt,
    updateUI;

  //Making an object to be sorted later.
  for (var x = 0; x < arrivalTime.length; x++)
    objCollection.push({
      PID: processID[x],
      A: arrivalTime[x],
      B: burstTime[x],
    });

  let objString = JSON.stringify(objCollection);

  console.log(`ObjColl before sort: ${objString}`);
  //Sorting begins with its corresponding Arrival Time and Burst Time
  //No interchanging of partner happens
  objCollection.sort(function (a, b) {
    return a.A - b.A;
  });

  objString = JSON.stringify(objCollection);
  console.log(`ObjColl after sort: ${objString}`);

  for (var x = 0; x < objCollection.length; x++) {
    //pushing to array AT and BT for later purposes.
    AT.push(objCollection[x].A);
    BT.push(objCollection[x].B);
    Pid.push(objCollection[x].PID);

    if (x === 0) {
      waiting = 0;
    } else {
      if (AT[x - 1] + BT[x - 1] + awt[x - 1] < AT[x]) waiting = 0;
      else waiting = AT[x - 1] + BT[x - 1] + awt[x - 1] - AT[x];
    }
    turnaround = BT[x] + waiting;

    //Display FCFS results in the UI
    globalVar.fcfsUITrigger++;
    updateUI = globalVar.fcfsUITrigger <= objCollection.length;
    if (updateUI) {
      console.log("before publisherView");
      publisherView(Pid[x], AT[x], BT[x], completion, waiting, turnaround);
    }

    //pushing to array att and awt for later purposes.
    att.push(turnaround);
    awt.push(waiting);
  }
  let totalTurnaround = 0;
  att.forEach(function (time) {
    totalTurnaround += time;
  });

  avgTt = totalTurnaround / objCollection.length;
  //   avgWt = averageWT(awt, objCollection.length);
  globalVar.fcfsTtPushed++;
  if (globalVar.fcfsTtPushed === 1)
    globalVar.avgTurnaroundTimes.push({
      Process: "FCFS",
      Avgtt: avgTt,
    });
};
