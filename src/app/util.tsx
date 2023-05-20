export function collapseText(text: string, length: number) {
  return text.slice(0, length) + "...";
}
export function formatNumber(num: number, currency: string) {
  return new Intl.NumberFormat("en-US").format(num) + currency;
}

export function getTimeElapsedText(registrationDate: Date) {
  const now = new Date();
  const elapsedMilliseconds =
    now.getMilliseconds() - registrationDate.getMilliseconds();

  const millisecondsInASecond = 1000;
  const millisecondsInAMinute = 60 * millisecondsInASecond;
  const millisecondsInAnHour = 60 * millisecondsInAMinute;
  const millisecondsInADay = 24 * millisecondsInAnHour;
  const millisecondsInAMonth = 30 * millisecondsInADay;
  const millisecondsInAYear = 365 * millisecondsInADay;

  if (elapsedMilliseconds < millisecondsInASecond) {
    return "방금 전";
  } else if (elapsedMilliseconds < millisecondsInAMinute) {
    const seconds = Math.floor(elapsedMilliseconds / millisecondsInASecond);
    return `${seconds}초 전`;
  } else if (elapsedMilliseconds < millisecondsInAnHour) {
    const minutes = Math.floor(elapsedMilliseconds / millisecondsInAMinute);
    return `${minutes}분 전`;
  } else if (elapsedMilliseconds < millisecondsInADay) {
    const hours = Math.floor(elapsedMilliseconds / millisecondsInAnHour);
    return `${hours}시간 전`;
  } else if (elapsedMilliseconds < millisecondsInAMonth) {
    const days = Math.floor(elapsedMilliseconds / millisecondsInADay);
    return `${days}일 전`;
  } else if (elapsedMilliseconds < millisecondsInAYear) {
    const months = Math.floor(elapsedMilliseconds / millisecondsInAMonth);
    return `${months}달 전`;
  } else {
    const years = Math.floor(elapsedMilliseconds / millisecondsInAYear);
    return `${years}년 전`;
  }
}
