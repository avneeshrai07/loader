import React from "react";
import './Hammer.css';

const Hammer = () => {
    return (
      <div className="gavel">
        <div className="hammer-handle">
            <div className="hammer-head"></div>
        </div>
        
        <div className="table"></div>

        {/* Particle effects */}
        <div className="ls-particles ls-part-1"></div>
        <div className="ls-particles ls-part-2"></div>
        <div className="ls-particles ls-part-3"></div>
        <div className="ls-particles ls-part-4"></div>
        <div className="ls-particles ls-part-5"></div>
      </div>
    );
};

export default Hammer;
