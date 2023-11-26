const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const day_ = document.getElementById("day");
const date_ = document.getElementById("date");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let date = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  console.log(date_);
  let days = [
    "SunDay",
    "MonDay",
    "TuesDay",
    "WednesDay",
    "ThursDay",
    "FriDay",
    "SaturDay",
  ][new Date().getDay()];
  console.log(days[new Date().getDay()]);
  let ampm = document.getElementById("ampm");
  if (h > 12) {
    h = h - 12;
    ampm.innerHTML = "Pm";
  } else {
    ampm.innerHTML = "Am";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  day = hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
  day_.innerHTML = days;
  date_.innerHTML = date + "/" + month + "/" + year;

  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
