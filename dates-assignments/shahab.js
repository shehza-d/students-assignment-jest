const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function dateFormat() {
  const addAmPm = new Date().getHours() > 11 ? "PM" : "AM";
  const now = new Date();
  const currentMin = now.getMinutes();
  const hour = now.getHours();

  const date1 = `${days[now.getDay()]} ${
    months[now.getMonth()]
  } ${now.getDate()} ${hour > 12 ? hour - 12 : hour}:${
    currentMin < 10 ? `0${currentMin}` : currentMin
  } ${addAmPm}`;

  return date1;
}

function dateFormat1() {
  // 04/20/2024 13:45:30

  const date = `${
    new Date().getMonth() + 1
  }/${new Date().getDate()}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

  return date;
}

module.exports = { dateFormat, dateFormat1 };
