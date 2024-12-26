import React, { useState } from 'react';
import LightsaberLoader from '../Lightsaber/Lightsaber';

function Submit() {
  
  const [turnLightSaber, setLightSaber] = useState(true);

  
  useState(() => {
    if (turnLightSaber === true) {
      setLightSaber(false); 
    } else {
      setLightSaber(true); 
    }
  }, [turnLightSaber]); // Dependency array to control the effect


  return (
    <div>
    {turnLightSaber && <LightsaberLoader />}
      <button onClick={() => setLightSaber(!turnLightSaber)}>
        Submit
      </button>
      
    </div>
  );
}

export default Submit;
