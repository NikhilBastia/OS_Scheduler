import { globalVar } from "../config/globalVar";

export const SjfPreemptive = function (
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

  var burst_remaining = [];
  var is_completed = [];
  var n = arrival_time.length;
  var updateUI;

  for (var i = 0; i < n; i++) {
    is_completed[i] = 0;
    burst_remaining[i] = burst_time[i];
  }
  var current_time = 0;
  var completed = 0;
  var prev = 0;

  while (completed != n) {
    var idx = -1;
    var mn = 10000000;
    for (var i = 0; i < n; i++) {
      if (arrival_time[i] <= current_time && is_completed[i] == 0) {
        if (burst_remaining[i] < mn) {
          mn = burst_remaining[i];
          idx = i;
        }
        if (burst_remaining[i] == mn) {
          if (arrival_time[i] < arrival_time[idx]) {
            mn = burst_remaining[i];
            idx = i;
          }
        }
      }
    }

    if (idx != -1) {
      if (burst_remaining[idx] == burst_time[idx]) {
        start_time[idx] = current_time;
      }
      burst_remaining[idx] -= 1;
      current_time++;
      prev = current_time;

      if (burst_remaining[idx] == 0) {
        completion_time[idx] = current_time;
        turnaround_time[idx] = completion_time[idx] - arrival_time[idx];
        waiting_time[idx] = turnaround_time[idx] - burst_time[idx];

        total_turnaround_time += turnaround_time[idx];
        total_waiting_time += waiting_time[idx];

        //display UI for SJF(PR) Sched.
        globalVar.sjfPrUITrigger++;
        updateUI = globalVar.sjfPrUITrigger <= n;
        if (updateUI)
          publisherView(
            pid[idx],
            arrival_time[idx],
            burst_time[idx],
            waiting_time[idx],
            turnaround_time[idx]
          );

        is_completed[idx] = 1;
        completed++;
      }
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

  for (var i = 0; i < n; i++) {
    console.log(
      pid[i],
      arrival_time[i],
      burst_time[i],
      completion_time[i],
      turnaround_time[i],
      waiting_time[i]
    );
  }

  globalVar.sjfPrTtPushed++;
  if (globalVar.sjfPrTtPushed === 1)
    globalVar.avgTurnaroundTimes.push({
      Process: "SJF (Preemptive)",
      Avgtt: avg_turnaround_time,
    });
};
