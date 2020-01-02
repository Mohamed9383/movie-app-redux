import React, { Component } from "react";
import StarRatingComponent from 'react-star-rating-component';
 
export default class Rate extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating:""
    };
  }
 
  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
  }
 
  render() {
 
    // const { rating } = this.state;
    
    return (                
      <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.props.rating}
          onStarClick={(rating)=>{this.props.newRating(rating)}}
        />
      </div>
    );
  }
}
 
