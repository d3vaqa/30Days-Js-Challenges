const movieCollection = {
    _movies: [],

    get movies(){
        return this._movies
    },

    set addMovie(movie){
        if(typeof movie === 'object' && movie.title && movie.director && movie.year){

            this._movies.push(movie)
        }else{
            console.log(`Entre valid information`)
        }
    },

    set removeMovie(title){
        const index = this._movies.findIndex((movie) =>  movie.title === title)
        if(index > -1){
            const removedMovie = this._movies.splice(index, 1)[0]
            console.log(`Removed movie: "${removedMovie.title}" directed by ${removedMovie.director}`);
        }else{
            console.log(`Movie not found`)
        }
    },


    // find movie by director

    set findMoviesByDirector(director){
        const directorMovies = this._movies.filter((movie)=> movie.director === director)
        if(directorMovies.length > 0){
            console.log(`Movies directed by ${director}: `, directorMovies)
        }else{
            console.log(`No movies found directed by: `, director)
        }
    },

    set findMoviesByYear(year){
        const  movieYear = this._movies.filter((movie)=> movie.year === year)
        if(movieYear.length > 0){
            console.log(`Movies released in ${year}:`, movieYear);
        }else{
            console.log(`No movies found released in ${year}.`);    
        }

    },
}




movieCollection.addMovie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010
  };
  
  movieCollection.addMovie = {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994
  };
  
  console.log("Movie Collection:", movieCollection.movies);
  
  // Remove a movie
  movieCollection.removeMovie = 'Inception';
  console.log("Updated Movie Collection:", movieCollection.movies);
  
  // Find movies by director
  movieCollection.findMoviesByDirector = 'Christopher Nolan';
  
  // Find movies by year
  movieCollection.findMoviesByYear = 1994;