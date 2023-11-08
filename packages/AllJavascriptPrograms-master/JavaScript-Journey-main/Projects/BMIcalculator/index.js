let form = document.querySelector('form')

form.addEventListener('submit', function (e) {
     e.preventDefault()

     const height = parseInt(document.querySelector('#height').value)
     const weight = parseInt(document.querySelector('#weight').value)
     const result = document.querySelector('#result')

     if (height === '' || height < 0 || isNaN(height)) {
          result.innerHTML = `Plase Enter a valid ${height}`
     }
     else if (weight === '' || weight < 0 || isNaN(weight)) {
          result.innerHTML = `Plase Enter a valid ${weight}`
     } else {
          let bodyWeight = (weight / ((height * height) / 10000)).toFixed(3)
          // show the result
          result.innerHTML = `<span>${bodyWeight}</span>`
          
     }
})