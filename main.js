var clock = document.querySelector('#clock');

function logTime() {
  var time = new Date();
  var hours = time.getHours() > 9 ? time.getHours() : '0' + time.getHours();
  var minutes = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();
  var seconds = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();

  // displays the time on the page
  clock.innerHTML = hours + ':' + minutes + ':' + seconds;

  // takes the time and turns it into a string which is used for the background color
  var str = clock.innerHTML;
  str = str.replace(/:/g, '');
  document.body.style.backgroundColor = '#' + str;
}

setInterval(logTime, 1000);
