import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import Misions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <>
        <div data-testid="missions">aaaa</div>
        <Title headline="Missões" />
        <div>
          <MissionCard
            name={ Misions.map((mission) => (
              <li key={ mission.name }>
                { mission.name }
              </li>)) }
            year={ Misions.map((mission) => (
              <li key={ mission.year }>
                { mission.year }
              </li>)) }
            country={ Misions.map((mission) => (
              <li key={ mission.country }>
                { mission.country }
              </li>)) }
            destination={ Misions.map((mission) => (
              <li key={ mission.destination }>
                { mission.destination }
              </li>)) }
          />
        </div>
      </>
    );
  }
}

export default Missions;
