let digitalElement = document.querySelector('.digital');
let sElemente = document.querySelector('.p_s');
let mElemente = document.querySelector('.p_m');
let hElemente = document.querySelector('.p_h');

function upDateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
  
}

function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(upDateClock, 1000);