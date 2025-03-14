import React from 'react';

const SlotWidgetFooter = () => {
  return (
    <footer className='d-flex justify-content-between p-3' style={{ borderTop: '1px solid #ccc' }}>
      <div className='d-flex justify-content-start align-items-center'>
        <a href="/">
          <img
            style={{ height: '50px' }}
            className="d-block"
            src='https://edunextpublic.s3.us-west-2.amazonaws.com/edxsites/sd-files/oddisey-platform/189811072.png'
            alt="Oddisey Logo"
          />
        </a>
        <div className='pl-3'>
          <span>Oddisey</span>
        </div>
      </div>
      <div className="d-flex">
        Footer developed by Modern Theming
      </div>
    </footer>
  );
};

export default SlotWidgetFooter;