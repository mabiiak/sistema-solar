import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class PlanetaCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div
        data-testid="planet-card"
        id="card"
      >

        <h2 data-testid="planet-name">
          {planetName}
        </h2>
        <img
          key={ planetName }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetaCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetaCard;
