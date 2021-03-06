import { globalVar } from "../config/globalVar";

export const priorityPremptive = function (
  pid,
  burst_time,
  priority,
  arrival_time,
  publisherView
) {
  var avg_turnaround_time, avg_waiting_time;

  var total_turnaround_time = 0,
    total_waiting_time = 0;

  var burst_remaining = [],
    is_completed = [];

  var start_time = [],
    completion_time = [],
    turnaround_time = [],
    waiting_time = [];

  var current_time = 0,
    completed = 0,
    prev = 0;

  var n = arrival_time.length;

  var updateUI;

  for (var i = 0; i < n; i++) {
    is_completed[i] = 0;
    burst_remaining[i] = burst_time[i];
  }

  while (completed != n) {
    var idx = -1;
    var mx = -1;
    for (var i = 0; i < n; i++) {
      if (arrival_time[i] <= current_time && is_completed[i] == 0) {
        if (priority[i] > mx) {
          mx = priority[i];
          idx = i;
        }
        if (priority[i] == mx) {
          if (arrival_time[i] < arrival_time[idx]) {
            mx = priority[i];
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

        //display UI for Priority(Pr) Sched.
        globalVar.priorityPrUITrigger++;
        updateUI = globalVar.priorityPrUITrigger <= n;
        if (updateUI)
          publisherView(
            pid[idx],
            arrival_time[idx],
            burst_time[idx],
            priority[idx],
            waiting_time[idx],
            turnaround_time[idx]
          );

        total_turnaround_time += turnaround_time[idx];
        total_waiting_time += waiting_time[idx];

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

  avg_turnaround_time = total_turnaround_time / n;
  avg_waiting_time = total_waiting_time / n;

  globalVar.priorityPrTtPushed++;
  if (globalVar.priorityPrTtPushed === 1)
    globalVar.avgTurnaroundTimes.push({
      Process: "Priority (Preemptive)",
      Avgtt: avg_turnaround_time,
    });
};
