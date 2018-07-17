import React, { Component } from "react";

class BandInput extends Component {
  constructor() {
    super();
    this.state = { text: "" };
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: "ADD_BAND",
      band: this.state.text
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Band Name"
            onChange={this.handleOnChange}
            type="text"
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
