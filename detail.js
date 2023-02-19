import MOVIES from "./data.js";

var movieId = 1;
const setMovieId = (id) => {
  movieId = id
}

const getMovieDetail = () => {

  const movie = MOVIES.find((mov) => mov.id === movieId)

  return movie
}

export {getMovieDetail, setMovieId}