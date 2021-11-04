import React, { Component } from 'react';
import Title from './Title';
import PlanetaCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {
          planets.map((planet) => (
            <PlanetaCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))
        }
      </>
    );
  }
}

export default SolarSystem;
