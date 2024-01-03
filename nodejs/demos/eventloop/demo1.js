// 验证事件循环的执行阶段：Mainline -> Timers -> Pending -> Idle,Prepare -> Poll IO -> Check -> Close -> Timers(循环)
// 注意：setTimeout/setInterval 的 delay 最小间隔为 4ms，即 <= 4ms 都是立即执行，等价于 0ms

const { readFile } = require("fs");

// 下面等同于 MIN_DELAY = 0
// const MIN_DELAY = 4;
const MIN_DELAY = 5;
setTimeout(() => {
  console.log("setTimeout delay 0 (Timers phase)");
  queueMicrotask(() =>
    console.log("queueMicrotask in setTimeout delay 0 (Timers phase)"),
  );
});
setTimeout(
  () => console.log(`setTimeout delay ${MIN_DELAY} (Timers phase)`),
  MIN_DELAY,
);
setImmediate(() => {
  console.log("setImmediate (Check phase)");
  queueMicrotask(() =>
    console.log("queueMicrotask in setImmediate (Check phase)"),
  );
});

let count = 0;
const timerId = setInterval(() => {
  if (count === 0)
    console.log(`setInterval delay ${MIN_DELAY}, ${count}th (Timers phase)`);
  else {
    console.log(`setInterval delay ${MIN_DELAY}, ${count}th (Timers phase)`);
    clearInterval(timerId);
    return;
  }

  count++;
}, MIN_DELAY);

queueMicrotask(() =>
  console.log("queueMicroTask in main (mainline microtasks)"),
);
process.nextTick(() =>
  console.log("process.nextTick in main (mainline microtasks)"),
);

readFile("./demo1.js", (err, data) => {
  console.log("readFile (Poll IO phase)");
});
console.log("main");
