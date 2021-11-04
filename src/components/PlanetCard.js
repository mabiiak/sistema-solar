import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetaCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">

        <img
          key={ planetName }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p data-testid="planet-name">
          {planetName}
        </p>

      </div>
    );
  }
}

PlanetaCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetaCard;
