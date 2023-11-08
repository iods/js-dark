let clock = document.getElementById('clock')
let curretnDate = document.getElementById('date')
let time = document.getElementById('time')

setInterval(() => {
     let date = new Date()
     // console.log(date);
     clock.innerHTML = date.toLocaleTimeString()
     // clock.innerHTML = date.getDate()

},1000)