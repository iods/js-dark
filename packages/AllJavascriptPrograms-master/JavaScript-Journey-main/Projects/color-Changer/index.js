let buttons = document.querySelectorAll('.buttons')
// console.log(buttons);
let body = document.querySelector('body')


buttons.forEach((button) => {
     // console.log(button);
     button.addEventListener('click', function (event) {
          console.log(event);

          // console.log(event.target);
          // if (event.target.id === 'blue') {
          //      body.style.backgroundColor = event.target.id
          // }
          // else if (event.target.id === 'gray') {
          //      body.style.backgroundColor = event.target.id
          // }
          // else if (event.target.id === 'green') {
          //      body.style.backgroundColor = event.target.id
          // }
          // else if (event.target.id === 'orange') {
          //      body.style.backgroundColor = event.target.id
          // } 
          // else if (event.target.id === 'greenyellow') {
          //      body.style.backgroundColor = event.target.id
          // } else {
          //      body.style.backgroundColor = 'white'
          // }

          switch (event.target.id) {
               case 'blue':
               
               case 'gray':
               case 'green':
               case 'orange':
               case 'greenyellow':
                    body.style.backgroundColor = event.target.id
                    break;
          
               default:
                    body.style.backgroundColor = 'white'
                    break;
          }
     })
})