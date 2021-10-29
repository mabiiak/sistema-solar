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

        <PlanetaCard
          planetName={
            planets.map((planet) => planet.name)
          }
          planetImage={
            planets.map((planet) => planet.image)
          }
        />
      </>
    );
  }
}

export default SolarSystem;
