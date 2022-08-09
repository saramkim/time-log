function Today() {
  const date = new Date();
  const today = date.toJSON().slice(0, 10);

  return today;
}

export default Today;
