import { globalVar } from "../config/globalVar";

export const SjfNonPreemptive = function (
  pid,
  burst_time,
  arrival_time,
  publisherView
) {
  var start_time = [],
    completion_time = [],
    turnaround_time = [],
    waiting_time = [];

  var avg_turnaround_time;
  var avg_waiting_time;

  var total_turnaround_time = 0;
  var total_waiting_time = 0;

  var is_completed = [];

  var n = arrival_time.length;

  var updateUI;

  for (var i = 0; i < n; i++) {
    is_completed[i] = 0;
  }

  var current_time = 0;
  var completed = 0;
  var prev = 0;

  while (completed != n) {
    var idx = -1;
    var mn = 10000000;
    for (var i = 0; i < n; i++) {
      if (arrival_time[i] <= current_time && is_completed[i] == 0) {
        if (burst_time[i] < mn) {
          mn = burst_time[i];
          idx = i;
        }
        if (burst_time[i] == mn) {
          if (arrival_time[i] < arrival_time[idx]) {
            mn = burst_time[i];
            idx = i;
          }
        }
      }
    }
    if (idx != -1) {
      start_time[idx] = current_time;
      completion_time[idx] = start_time[idx] + burst_time[idx];
      turnaround_time[idx] = completion_time[idx] - arrival_time[idx];
      waiting_time[idx] = turnaround_time[idx] - burst_time[idx];

      //display UI for SJF(PR) Sched.
      globalVar.sjfNPrUITrigger++;
      updateUI = globalVar.sjfNPrUITrigger <= n;
      if (updateUI)
        publisherView(
          pid[idx],
          arrival_time[idx],
          burst_time[idx],
          waiting_time[idx],
          turnaround_time[idx]
        );

      total_turnaround_time += turnaround_time[idx];
      total_waiting_time += waiting_time[idx];

      is_completed[idx] = 1;
      completed++;
      current_time = completion_time[idx];
      prev = current_time;
    } else {
      current_time++;
    }
  }

  var min_arrival_time = 10000000;
  var max_completion_time = -1;
  for (var i = 0; i < n; i++) {
    min_arrival_time = Math.min(min_arrival_time, arrival_time[i]);
    max_completion_time = Math.max(max_completion_time, completion_time[i]);
  }

  avg_turnaround_time = parseFloat(total_turnaround_time) / parseFloat(n);
  avg_waiting_time = parseFloat(total_waiting_time) / parseFloat(n);

  globalVar.sjfNPrTtPushed++;
  if (globalVar.sjfNPrTtPushed === 1)
    globalVar.avgTurnaroundTimes.push({
      Process: "SJF (Non-Preemptive)",
      Avgtt: avg_turnaround_time,
    });
};
