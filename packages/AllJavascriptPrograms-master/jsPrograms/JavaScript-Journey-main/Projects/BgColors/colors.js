// generating Random color

const randomColorGenerator = function () {
     const hex = '123456789ABCDEF'
     let color = '#'

     for (let i = 0; i < 6; i++) {
          color += hex[Math.floor(Math.random() * 16)]
     }
     return color;
}

// console.log(randomColorGenerator());
let validator;
// let lastColor = document.getElementById('lastColor')

let startBGColorChanging = function () {
     let changeBgColor = function () {
          document.body.style.backgroundColor = randomColorGenerator()
          // lastColor.innerHTML = randomColorGenerator()
     }
     if (!validator) {
          validator = setInterval(changeBgColor,2000)
     }
     
     
     // validator = setInterval(changeBgColor,5000)

}

let stopBGColorChanging = function () {
     clearInterval(validator)
     
     validator = null ;
 }


document.getElementById('start').addEventListener
     ('click', startBGColorChanging)
document.getElementById('stop').addEventListener
     ('click', stopBGColorChanging)

