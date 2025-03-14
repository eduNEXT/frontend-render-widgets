import React from 'react';

const SlotWidgetHeaderLogo = () => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '1rem', 
      display: 'flex', 
      justifyContent: 'flex-start', 
      alignItems: 'center' 
    }}>
      <a href="/">
        <img 
          className="d-block"
          src='https://edunextpublic.s3.us-west-2.amazonaws.com/edxsites/sd-files/oddisey-platform/189811072.png'
          alt="Oddisey Logo"
        />
      </a>
      <p>Oddisey from Modern</p>
    </div>
  );
};

export default SlotWidgetHeaderLogo;