import React from 'react'
import Rate from "./ratingmovies";
import "./navmenu.css";
import { connect } from 'react-redux'
import {filteritems, filtertitle} from "../actions"
function navmenu({filterRate,filterTitle}) {
  return (
    

            <div className="topMenu">
              <div>
              <input onChange={(e) => {
                filterTitle(e.target.value)
              }}/>
              <button>Search</button>
              </div>
              <div>
              <Rate newRating={filterRate}/>
              </div>
            </div>

      
  )
}



const mapDispatchToProps = dispatch => {
  return {
    filterRate: payload => dispatch (filteritems(payload)),
    filterTitle: payload => dispatch (filtertitle(payload)),
  }
}
export default connect (null, mapDispatchToProps) (navmenu)
