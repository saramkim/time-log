function getMonthDateList() {
  const date = new Date();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const thisYear = date.getFullYear();
  const thisMonth = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const monthDateList = [];
  for (let i = 1; i <= lastDay; i++) {
    if (i < 10) {
      monthDateList.push(`${thisYear}-${thisMonth}-0${i}`);
    } else monthDateList.push(`${thisYear}-${thisMonth}-${i}`);
  }

  return monthDateList;
}
export default getMonthDateList;
