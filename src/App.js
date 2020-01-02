import React, { Component } from "react";
import MoviesList from "./components/moviesList";
import Navmenu from "./components/navmenu";
import {Route,Switch} from "react-router-dom";
import Trailer from './components/Trailer';

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="containerMovies">
          <div className="containerMovie">
            <Navmenu />
    
            <Switch>
              <Route exact path='/' component={MoviesList} /> 
              <Route exact path="/Trailer:Film" component={Trailer} />
            </Switch>
   

            {/* <Movies test={this.handleChangeRate} 
      test1={this.handleChangeYear}/> */}
          </div>
        </div>
      </div>
    );
  }
}
