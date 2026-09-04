const searchBtn = document.getElementById('search-btn') 
const searchBar = document.getElementById('search-bar')
const movies = document.getElementById('movies')

searchBtn.addEventListener('click', function(){
    console.log('clicked')
    let movieList = ''
    let keyWord = searchBar.value
    // let keyWord = "avenger"
    console.log(keyWord)
    fetch(`https://www.omdbapi.com/?apikey=d2e6243d&s=${keyWord}&page=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (!data?.Error) {
                data.Search.forEach(element => {
                    let id = element.imdbID
                    console.log(id)
                    fetch(`https://www.omdbapi.com/?apikey=d2e6243d&i=${id}`)
                    .then(res => res.json())
                    .then(movie => {
                        console.log(movie)
                        movieList += `
                            <div class="movie">
                                <img src="${movie.Poster}">
                                    <div>
                                        <h2>${movie.Title}<span><i class="fa-solid fa-star"></i>${movie.imdbRating}</span></h2>
                                        <span>${movie.Runtime}</span><span>${movie.Genre}</span><span data-id="${movie.imdbID}"><i class="fa-solid fa-circle-plus"></i>Watchlist</span>
                                        <p>${movie.Plot}</p>
                                    </div>
                            </div>
                        `
                        movies.innerHTML = movieList
                    });
                });
            } else if (data.Error === 'Too many results.' || data.Error === 'Movie not found!') {
                movies.innerHTML = "Cant : " +  data.Error
            } else {
                movies.innerHTML = "Error : " +  data.Error
            }
        });
        let Ids = [] 
        document.addEventListener('click',(e) => {
            if (e.target.dataset.id) {
                console.log(e.target.dataset.id)
                Ids.push(e.target.dataset.id)
                localStorage.setItem('Id', JSON.stringify(Ids));
                JSON.parse(localStorage.getItem('Id', Ids));
                console.log(Ids)
            }
        })
})








// console.log(1)


                // <div class="movie">
                //     <img src="img\df0b6ef9ddbc674841896e9c23ceb7df02ff2d85.png">
                //     <div>
                //         <h2>Blade Runner<span><i class="fa-solid fa-star"></i>8.1</span></h2>
                //         <span>116 min</span><span>Drama, Mystery, Sci-fi</span><span><i class="fa-solid fa-circle-plus"></i>Watchlist</span>
                //         <p>A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</p>
                //     </div>
                // </div>
                // <div class="movie">
                //     <img src="img\df0b6ef9ddbc674841896e9c23ceb7df02ff2d85.png">
                //     <div>
                //         <h2>Blade Runner
                //         <span>116 min</span><span>Drama, Mystery, Sci-fi</span><span>Watchlist</span>
                //         <p>A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</p>
                //     </div>
                // </div>













// https://www.omdbapi.com/?apikey=d2e6243d&s=guardians+of+the+galaxy

