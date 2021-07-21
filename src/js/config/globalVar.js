export let globalVar = {
  i: 1,
  pid: 1, //For displayFinalProcess Function
  quantum: 0,
  processes: [],
  processId: [],
  priorities: [],
  burstTimes: [],
  arrivalTimes: [],
  avgTurnaroundTimes: [],
  fcfsUITrigger: 0,
  sjfPrUITrigger: 0,
  sjfNPrUITrigger: 0,
  roundRobinUITrigger: 0,
  priorityPrUITrigger: 0,
  priorityNPrUITrigger: 0,
  sorted: false, //for sorting purpose in btnSort eventListener
  btnRRClick: 0,
  btnAlgoClick: 0,
  btnSummaryClick: 0,
  btnfcfsClick: 0,
  btnSjfPremClick: 0,
  btnSjfNonPrClick: 0,
  btnpriorityPrempClick: 0,
  btnpriorityNonPrempClick: 0,
  fcfsTtPushed: 0,
  sjfPrTtPushed: 0,
  sjfNPrTtPushed: 0,
  rrTtPushed: 0,
  priorityPrTtPushed: 0,
  priorityNPrTtPushed: 0,
};
