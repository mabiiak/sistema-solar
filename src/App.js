import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
