import React, { Component } from "react";
import MoviesList from "./components/moviesList";
import Navmenu from "./components/navmenu";
import { Film } from "./components/Film";
import "./App.css";

export default class App extends Component {
  state = {
    minRate: 0,
    MoviesList: Film,
    rateTitle: "",
    isLoading: false
  };
  componentDidMount = () => {
    setTimeout(() => this.setState({ isLoading: false }), 200);
    this.setState({ isLoading: true });
  };
  newRating = newval => {
    this.setState({
      minRate: newval
    });
  };
  onChange = newValue => {
    setTimeout(() => this.setState({ isLoading: false }), 300);
    this.setState({ isLoading: true });
    this.setState({
      rateTitle: newValue
    });
  };
  addNewmovie = newMovie => {
    this.setState({
      MoviesList: this.state.MoviesList.concat(newMovie)
    });
  };
  render() {
    return (
      <div className="App">
        <div className="containerMovies">
          <div className="containerMovie">
            <Navmenu
              newRating={this.newRating}
              value={this.state.rateTitle}
              onChange={this.onChange}
            />
            <MoviesList
              isLoading={this.state.isLoading}
              movies={this.state.MoviesList.filter(
                el =>
                  el.rating >= this.state.minRate &&
                  el.name
                    .toLowerCase()
                    .includes(this.state.rateTitle.toLowerCase())
              )}
              addNewmovie={this.addNewmovie}
            />

            {/* <Movies test={this.handleChangeRate} 
      test1={this.handleChangeYear}/> */}
          </div>
        </div>
      </div>
    );
  }
}
