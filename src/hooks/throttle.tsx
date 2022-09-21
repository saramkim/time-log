function throttle<Event>(cb: (event: Event) => void, delay: number) {
  let timer: NodeJS.Timeout | undefined;
  return (event: Event) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(event);
      timer = undefined;
    }, delay);
  };
}
export default throttle;
