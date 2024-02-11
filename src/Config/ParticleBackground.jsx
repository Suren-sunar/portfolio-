import React from 'react';
import Particles from 'react-tsparticles';
import ParticleConfig from './ParticleConfig';

const ParticleBackground = () => {
  return (
    <div>
      <Particles params={ParticleConfig} />
    </div>
  );
};

export default ParticleBackground;
