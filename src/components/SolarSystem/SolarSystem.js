import React, { Component } from 'react';
import Title from '../Title';
import PlanetaCard from '../PlanetCard/PlanetCard';
import planets from '../../data/planets';
import './style.css';

class SolarSystem extends Component {
  render() {
    return (
      <div
        data-testid="solar-system"
      >
        <Title headline="Planetas" />
        <div id="system">
          {
            planets.map((planet) => (
              <PlanetaCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
