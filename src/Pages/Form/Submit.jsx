import React, { useState } from 'react';
import LightsaberLoader from '../Lightsaber/Lightsaber';
import HammerLoader from '../Hammer/Hammer';
function Submit() {
  
  const [turnLightSaber, setLightSaber] = useState(true);
  const [turnHammer, setHammer] = useState(true);
  
  useState(() => {
    if (turnLightSaber === true) {
      setLightSaber(false); 
    } else {
      setLightSaber(true); 
    }
  }, [turnLightSaber]); // Dependency array to control the effect

  useState(() => {
    if (turnHammer === true) {
      setHammer(false); 
    } else {
      setHammer(true); 
    }
  }, [turnHammer]); // Dependency array to control the effect

  return (
    // <div>
    // {turnLightSaber && <LightsaberLoader />}
    //   <button onClick={() => setLightSaber(!turnLightSaber)}>
    //     Submit
    //   </button>
      
    // </div>

    <div>
    {turnHammer && <HammerLoader />}
      <button onClick={() => setHammer(!turnHammer)}>
        Submit
      </button>
      
    </div>
  );
}

export default Submit;
