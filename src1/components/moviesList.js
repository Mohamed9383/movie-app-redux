import React from "react";
import Movies from "./movies";
import Rate from "./ratingmovies";
import WithLoading from "./withLoader"
function moviesList({ movies, addNewmovie, isLoading }) {
  return (
    <div className="filmsContainer">
      {movies.map((el, i) => (
        <div className="film">
          <div className="imgFilmsMovies">
            <img src={el.src} alt=""></img>
            <div className="rateMovies">
              <Rate rating={el.rating} />
            </div>
          </div>
          <div>
            <span>{el.name}</span>
            <span> {el.year}</span>
          </div>
        </div>
      ))}
      <div className="film">
        <Movies addMovie={addNewmovie} />
      </div>
    </div>
  );
}
export default WithLoading (moviesList);