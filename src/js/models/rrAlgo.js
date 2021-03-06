import { globalVar } from "../config/globalVar";

export const roundRobin = function (pid, bt, quantum, at, publisherView) {
  var proc = [],
    temp;
  var n = at.length;
  var updateUI;

  for (var i = 0; i < n; i++) {
    temp = {
      pid: pid[i],
      arrival_time: at[i],
      burst_time: bt[i],
      start_time: 0,
      completion_time: 0,
      turnaround_time: 0,
      waiting_time: 0,
    };
    proc.push(temp);
  }

  var avg_turnaround_time;
  var avg_waiting_time;

  var total_turnaround_time = 0;
  var total_waiting_time = 0;
  var burst_remaining = [];

  for (var i = 0; i < n; i++) {
    burst_remaining[i] = proc[i].burst_time;
  }
  var idx;

  proc.sort(function (a, b) {
    return a.arrival_time - b.arrival_time;
  });

  var q = [];
  var current_time = 0;
  q.push(0);
  var completed = 0;
  var mark = [];
  for (var i = 0; i < n; i++) {
    mark[i] = 0;
  }
  mark[0] = 1;

  while (completed != n) {
    idx = q.shift();
    if (burst_remaining[idx] === proc[idx].burst_time) {
      proc[idx].start_time = Math.max(current_time, proc[idx].arrival_time);
      current_time = proc[idx].start_time;
    }

    if (burst_remaining[idx] - quantum > 0) {
      burst_remaining[idx] -= quantum;
      current_time += quantum;
    } else {
      current_time += burst_remaining[idx];
      burst_remaining[idx] = 0;
      completed++;

      proc[idx].completion_time = current_time;
      proc[idx].turnaround_time =
        proc[idx].completion_time - proc[idx].arrival_time;
      proc[idx].waiting_time = proc[idx].turnaround_time - proc[idx].burst_time;

      //display UI for Round-Robin Sched.
      globalVar.roundRobinUITrigger++;
      updateUI = globalVar.roundRobinUITrigger <= n;
      if (updateUI)
        publisherView(
          proc[idx].pid,
          proc[idx].arrival_time,
          proc[idx].burst_time,
          proc[idx].waiting_time,
          proc[idx].turnaround_time
        );

      total_turnaround_time += proc[idx].turnaround_time;
      total_waiting_time += proc[idx].waiting_time;
    }

    for (var i = 1; i < n; i++) {
      if (
        burst_remaining[i] > 0 &&
        proc[i].arrival_time <= current_time &&
        mark[i] == 0
      ) {
        q.push(i);
        mark[i] = 1;
      }
    }
    if (burst_remaining[idx] > 0) {
      q.push(idx);
    }

    if (q.length == 0) {
      for (var i = 1; i < n; i++) {
        if (burst_remaining[i] > 0) {
          q.push(i);
          mark[i] = 1;
          break;
        }
      }
    }
  }

  var avg_waiting_time = parseFloat(total_waiting_time) / parseFloat(n);
  var avg_turnaround_time = parseFloat(total_turnaround_time) / parseFloat(n);

  proc.sort(function (a, b) {
    return a.pid - b.pid;
  });

  globalVar.rrTtPushed++;
  if (globalVar.rrTtPushed === 1)
    globalVar.avgTurnaroundTimes.push({
      Process: "Round Robin",
      Avgtt: avg_turnaround_time,
    });
};
