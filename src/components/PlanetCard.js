import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetaCard extends Component {
  PropTypes = {
    planetName: PropTypes.string.isRequired,
  }

  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { planetName }
        </p>

        { planetImage.map((planet) => (
          <img
            key={ planet.name }
            src={ planet.image }
            alt={ `Planeta ${planetName}` }
          />))}
      </div>
    );
  }
}

PlanetaCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetaCard;
