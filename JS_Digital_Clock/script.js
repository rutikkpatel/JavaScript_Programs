let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
  a = new Date();
  // Hours Minutes and Second Concate
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById('time').innerText = time;

  // 20/12/2000 - Format
  // date = a.toLocaleDateString(); 

  // Display month day in string format - Wednesday, 20 December 2000
  date = a.toLocaleDateString(undefined, options);
  document.getElementById('date').innerText = date;
}, 1000);