import React, { Component } from 'react';

// O componente Title deve receber uma prop headline.
// Ele deve conter uma tag h2, que deve renderizar o texto recebido pela prop headline.

class Title extends Component {
  render() {
    return (
      <h2> { this.props.headline } </h2>
    );
  }
}

export default Title;
