const API_URL = 'https://api.themoviedb.org/3/tv/99966/credits?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getAnimations('search')

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.cast)
}

function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie) => {
        const {profile_path} = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + profile_path}" alt="hui">
            <div class="movie-info">
                <h3>${title}</h3>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                okik            </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote){
    if(vote >=8){
        return 'green'
    }else if (vote >=5){
        return 'orange'
    }else {
        return 'red'
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else{
        window.location.reload()
    }
})
