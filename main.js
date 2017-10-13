var clock = document.querySelector('#clock');

function logTime() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  // change to 12-hour clock
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour === 0) {
    hour = 12;
  }

  // add 0 in front of single digit hours
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  // displays the time on the page
  clock.innerHTML = hour + ':' + minute + ':' + second;

  // takes the time and turns it into a string which is used for the background color
  var str = clock.innerHTML;
  str = str.replace(/:/g, '');

  document.body.style.backgroundColor = '#' + str;
}

setInterval(logTime, 1000);
