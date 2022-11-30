const deadline = '2023-01-01';

window.addEventListener('load', () => {
  let days = document.getElementById('days');
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let repeat = setInterval(() => {
    let remainingTime = getTimeRemaining(deadline);
    setData(remainingTime, days, hours, minutes, seconds);
    stopCountDown(repeat, remainingTime);
  }, 1000);
  
})

function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  const remainingTime = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }

  return remainingTime;
}

function setData(remainingTime, days, hours, minutes, seconds) {
  days.innerHTML = remainingTime.days;
  hours.innerHTML = remainingTime.hours;
  minutes.innerHTML = remainingTime.minutes;
  seconds.innerHTML = remainingTime.seconds;
}

function stopCountDown(intervalId, remainingTime) {
  if (remainingTime.days == 0 &&
    remainingTime.hours == 0 &&
    remainingTime.minutes == 0 &&
    remainingTime.seconds == 0) {
        clearInterval(intervalId);
    }
}