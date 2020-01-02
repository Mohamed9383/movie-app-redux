import React from "react";
import Movies from "./movies";
import Rate from "./ratingmovies";
import Edit from "./edit"
import { connect } from 'react-redux'
import {additems, deleteitems, edititems} from "../actions"
import { Link } from "react-router-dom";
import { Film } from "./Film";

function moviesList({ movies, addItem,deleteitem,edititems }) {
  let id=Math.random();
  return (
    <div className="filmsContainer">
      {movies.map((el) => (
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
          <div className="bottomListMovies">
            <button onClick={() => deleteitem(el.id)}>Delete</button>
            <Edit edititems={edititems} id={el.id} movie={el}/>
          </div>
          <Link to={"/Trailer" + el.name } className="trailer-btn btn ">
            Description
          </Link>

        </div>
      ))}
      <div className="film">
        <Movies addMovie={addItem} />
      </div>
    </div>

  );
}

const mapStateToProps = state => {
  return {
    movies:state.MoviesList.filter(
      el =>
        el.rating >= state.minRate &&
        el.name
          .toLowerCase()
          .includes(state.rateTitle.toLowerCase())
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItem: payload => dispatch (additems(payload)),
    deleteitem: payload => dispatch (deleteitems(payload)),
    edititems: payload => dispatch (edititems(payload))
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (moviesList)
