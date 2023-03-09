export const getTimer = (launchDate) => {
  let string = "";
  let now = new Date().getTime();

  let countDown = launchDate - now;

  let day = Math.floor(countDown / (1000 * 60 * 60 * 24));

  if (day < 10 && day > 0) {
    day = "0" + day;
  }

  if (day > 0) {
    string += "ZILE - ";
    day += " : ";
  } else {
    day = "";
  }

  let hour = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 1;

  if (hour < 10 && hour >= 0) {
    hour = "0" + hour;
  }
  hour += " : ";

  let min = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));

  if (min < 10 && min >= 0) {
    min = "0" + min;
  }

  min += " : ";

  let sec = Math.floor((countDown % (1000 * 60)) / 1000);

  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }

  string += "ORE - MIN - SEC";

  let time = { day: day, hour: hour, min: min, sec: sec, string: string };
  return time;
}