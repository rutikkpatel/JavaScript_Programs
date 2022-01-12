let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    a = new Date();
    // Hours Minutes and Second Concate
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    // date = a.toLocaleDateString();
    // Display month day in string format
    date = a.toLocaleDateString(undefined, options);
    document.getElementById('time').innerText = time;
    document.getElementById('date').innerText = date;
}, 1000);