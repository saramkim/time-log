// const self = globalThis as unknown as DedicatedWorkerGlobalScope;

/* eslint-disable no-restricted-globals */
let countTimer: NodeJS.Timer;
self.onmessage = (e: MessageEvent<string>) => {
  console.log(`worker: ${e.data}`);

  if (e.data === 'start') {
    let time = 0;
    countTimer = setInterval(() => {
      console.log(`interval: ${e.data}`);
      time++;
      self.postMessage(time);
      console.log(time);
    }, 1000);
  } else {
    clearInterval(countTimer);
  }
};
