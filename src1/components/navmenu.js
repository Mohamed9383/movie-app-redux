import React from 'react'
import Rate from "./ratingmovies";
import "./navmenu.css";
export default function navmenu({newRating, value, onChange}) {
  return (
    

            <div className="topMenu">
              <div>
              <input value={value} onChange={(e) => {
                onChange(e.target.value)
              }}/>
              <button>Search</button>
              </div>
              <div>
              <Rate newRating={newRating} test={true}/>
              </div>
            </div>

      
  )
}
