import React from 'react';
import './YourComponent.css'; // Import your CSS file
import VID  from '../../assets/vids.mp4'
const YourComponent = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={VID} type="video/mp4" />
        {/* Add additional <source> elements for different video formats */}
        
      </video>
      <div className="content">
        {/* Your other React components and content */}
      </div>
    </div>
  );
};

export default YourComponent;
