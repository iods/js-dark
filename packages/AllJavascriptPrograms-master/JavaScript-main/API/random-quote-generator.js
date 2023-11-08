let fetchData = document.getElementById('fetch-btn');
let quote = document.getElementById('quote');
let author1 = document.getElementById('author');
fetchData.addEventListener('click', () => {
    fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(result => {
            let idx = Math.floor(Math.random() * result.length)
            quote.innerHTML = result[idx].text;

            console.log(result);
        })
})