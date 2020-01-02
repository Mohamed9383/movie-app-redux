import React from "react";
import Modal from "react-modal";

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

export default class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      name: "",
      src: "",
      year: "",
      rating: ""
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
  newMovie = () => {
    this.props.addMovie({
        src:this.state.src,
        name:this.state.name,
        year:this.state.year,
        rating:this.state.rating
    });
    this.setState({src:'',name:'',year:'',rating:''})
};

  handleChangeMovie = e => this.setState({ name: e.target.value });
  handleChangeImg = e => this.setState({ src: e.target.value });
  handleChangeYear = e => this.setState({ year: e.target.value });
  handleChangeRate = e => this.setState({ rating: e.target.value });
  render() {
    return (
      <div>
        <div className="bouttonmodal">
          <button onClick={this.openModal}>
            <p className="addListMovies">+</p>
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
          <button onClick={this.newMovie}>add</button>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}
