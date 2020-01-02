import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Trailer = props => {
  const movie = props.MoviesList.filter(el => {
    return el.name === props.match.params.Film;
  })[0]; //type obj
  return (
    <div className="trailer">
      <h1 className="trailer-title">{movie.name}</h1>
      <iframe
        title="trailer"
        width="700"
        height="300"
        src={movie.trailer}
        frameBorder="0"
        allowFullScreen
        // className="trailer-vid"
      />
      <h1>{movie.desc}</h1>
      <Link to="/" className="back-btn">
        <button> Back </button>
      </Link>
    </div>
  );
};
const mapStateToProps = state => ({
    MoviesList: state.MoviesList
});
export default connect(mapStateToProps)(Trailer);