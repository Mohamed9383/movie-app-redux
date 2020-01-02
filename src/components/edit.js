import React from "react";
import Modal from "react-modal";
import {edititems} from '../actions'
import { connect } from 'react-redux'
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      name: this.props.movie.name ,
      src: this.props.movie.src,
      year: this.props.movie.year,
      rating: this.props.movie.rating,
      
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChangeMovie = e => this.setState({ name: e.target.value });
  handleChangeImg = e => this.setState({ src: e.target.value });
  handleChangeYear = e => this.setState({ year: e.target.value });
  handleChangeRate = e => this.setState({ rating: e.target.value });
  render() {
    let id = Math.random()
    return (
     
      <div>
        <div>
          <button onClick={this.openModal}>
            Edit
          </button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Add Movie</h2>
          <input
            type="text"
            value={this.state.src}
            onChange={this.handleChangeImg}
          />
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeMovie}
          />
          <input
            type="text"
            value={this.state.year}
            onChange={this.handleChangeYear}
          />
          <input
            type="text"
            value={this.state.rating}
            onChange={this.handleChangeRate}
          />
      
                   <button
        onClick={() => {
             this.props.edititems({id:this.props.id, movie:this.state})
        }}
      >
        save
      </button>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      MoviesList:state.MoviesList
  }
}
const mapDispatchToProps = dispatch => {
    return {

      edititems: payload => dispatch (edititems(payload))
    }
  }
  export default  connect (mapStateToProps, mapDispatchToProps) (Edit)