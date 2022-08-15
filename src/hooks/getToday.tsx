function getToday() {
  const date = new Date();
  const thisYear = date.getFullYear();
  const thisMonth = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const thisDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const getToday = `${thisYear}-${thisMonth}-${thisDay}`;

  return getToday;
}

export default getToday;
