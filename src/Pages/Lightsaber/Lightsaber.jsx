import React from 'react';
import './Lightsaber.css';
const LightsaberLoader = () => {
  return (
    <div>
      <div id="Lightsaberloader">
        <div className="ls-particles ls-part-1"></div>
        <div className="ls-particles ls-part-2"></div>
        <div className="ls-particles ls-part-3"></div>
        <div className="ls-particles ls-part-4"></div>
        <div className="ls-particles ls-part-5"></div>
        <div className="lightsaber ls-left ls-green"></div>
        <div className="lightsaber ls-right ls-red"></div>
      </div>
    </div>
  );
};

export default LightsaberLoader;
