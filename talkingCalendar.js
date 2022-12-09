const talkingCalendar = function(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let ordinal = '';
  let dates = date.split('/');
  if (dates[2] === '01' || dates[2] === '21' || dates[2] === '31') {
    ordinal = 'st';
  } else if (dates[2] === '02' || dates[2] === '22') {
    ordinal = 'nd';
  } else if (dates[2] === '03' || dates[2] === '23') {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }
  let monthInt = parseInt(dates[1] - 1);
  let dayInt = parseInt(dates[2]);
  return `${months[monthInt]} ${dayInt}${ordinal}, ${dates[0]}`;
};

console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("2007/11/02"));
console.log(talkingCalendar("1987/08/03"));
console.log(talkingCalendar("2022/01/04"));
