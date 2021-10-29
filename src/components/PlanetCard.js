import React, { Component } from 'react';
import PropTypes from 'prop-types';

// O componente PlanetCard deve receber duas props:
// uma chamada planetName e outra chamada planetImage

class PlanetaCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img src={planetImage} alt={`Planeta ${planetName}`} />
      </div>
    );
  }
}

export default PlanetaCard;
