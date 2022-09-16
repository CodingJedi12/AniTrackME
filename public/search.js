const searchButton = document.getElementById('search-button');
const fetch = require('node-fetch');

searchButton.addEventListener('click', e => {
    e.preventDefault();
    const inputValue = document.querySelector('#search-input').value;
    const url = `https://api.jikan.moe/v4/anime?q=${inputValue}&sfw`;
    const results = document.getElementById('search-results');
   

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not fetch');
            }

            return response.json();
        })
        .then(json => { 
            const animes = json.data;
            let output = '';
            animes.forEach((anime, i)=> {
                const image = anime.images.jpg.large_image_url;
                const title = anime.title;
                const id = anime.mal_id;

                const markup = `
                <div class="individual-anime">
                <h3 class="index-title">${title}</h3>
                <a href="/anime/${id}"><img class="index-image" src="${image}"></a>
                </div>
                `

                output += markup;
            });
            console.log('results', results)
            results.innerHTML = output;
        })
        .catch(err => {
            console.error(err);
        });
});