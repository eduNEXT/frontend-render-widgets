import React from 'react';

const SlotWidgetHeaderLogo = () => {
  return (
    <div
      className='d-flex justify-content-start align-items-center p-2 mr-2'
      style={{ borderRight: '1px solid #ccc' }}
    >
      <a href="/">
        <img
          style={{ height: '50px' }}
          className="d-block"
          src='https://edunextpublic.s3.us-west-2.amazonaws.com/edxsites/sd-files/oddisey-platform/189811072.png'
          alt="Oddisey Logo"
        />
      </a>
      <div className="pl-3">
        <span>Oddisey Modern</span>
      </div>
    </div>
  );
};

export default SlotWidgetHeaderLogo;