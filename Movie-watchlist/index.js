const searchBtn = document.getElementById('search-btn') 
const searchBar = document.getElementById('search-bar')
const movies = document.getElementById('movies')
const watchlist = document.getElementById('watchlist')
let Ids = []
let movieList =""
let watchlistIds = []

if (searchBtn){
    searchBtn.addEventListener('click', function(){
        let keyWord = searchBar.value
        fetch(`https://www.omdbapi.com/?apikey=d2e6243d&s=${keyWord}&page=1`)
        .then(res => res.json())
        .then(data => {
            if (!data?.Error) {
                data.Search.forEach(element => {
                    let id = element.imdbID
                    listMovies(id, movies, "plus")
                });
            } else if (data.Error === 'Too many results.' || data.Error === 'Movie not found!') {
                movies.innerHTML = `
                <div id="unable" class="nothing-placeholder movies-placeholder">
                    <p>Unable to find what you’re looking for.<br> 
                    Please try another search.</p>
                </div>
                `
            } else {
            }
            addOrRemove()
        });
    })
} else if (watchlist) {
    keeplist()    
    let watchlistIds = Ids
    watchlistIds.forEach(wlId => {
        listMovies(wlId, watchlist, "minus")
    })
    addOrRemove()
}

function listMovies(id, listEL, icon){
    fetch(`https://www.omdbapi.com/?apikey=d2e6243d&i=${id}`)
    .then(res => res.json())
    .then(movie => {
        movieList += `
            <div class="movie ${icon}">
                <img src="${movie.Poster}">
                <div>
                    <h2>${movie.Title}<span><i class="fa-solid fa-star"></i>${movie.imdbRating}</span></h2>
                    <span>${movie.Runtime}</span><span>${movie.Genre}</span><span data-id="${movie.imdbID}"><i class="fa-solid fa-circle-${icon}"></i>Watchlist</span>
                    <p>${movie.Plot}</p>
                </div>
            </div>
        `
        listEL.innerHTML = movieList
    });
}

function addOrRemove(){    
    if (movies){
        document.addEventListener('click',(e) => {
            if (e.target.dataset.id) {
                keeplist()
                Ids.push(e.target.dataset.id)
                localStorage.setItem('Id', Ids);
            }
        })
    } else if (watchlist) {
        document.addEventListener('click',(e) => {
            if (e.target.dataset.id) {
                keeplist()
                Ids.splice(Ids.indexOf(e.target.dataset.id), 1);
                localStorage.setItem('Id', Ids);
                location.reload();
            }
        }) 
        
    }    
}

function keeplist(){
    if ((localStorage.getItem('Id'))) {
        Ids = localStorage.getItem('Id').split(",");
    }
}
