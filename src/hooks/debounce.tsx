function debounce<Event>(cb: (event: Event) => void, delay: number) {
  let timer: NodeJS.Timeout;
  return (event: Event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, event);
  };
}
export default debounce;
