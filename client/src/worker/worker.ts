const self = globalThis as unknown as DedicatedWorkerGlobalScope;

self.onmessage = (e: MessageEvent<string>) => {
  let time = 0;
  setInterval(() => {
    if (e.data === 'up') {
      time++;
    } else if (e.data === 'down') {
      time--;
    }
    self.postMessage(time);
  }, 1000);
};

export {};
