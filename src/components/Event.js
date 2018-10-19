import React from 'react';


const Event = ({ title, date, onClick, className='', style={} }) => {

  // Figure out color coding based off of icDimType
  
  return (
    <div
      className={`${className} event`}
      style={{ textDecoration:'italic', ...style }}
      onClick={onClick}
    >
      <div className="title">{title}</div>
    </div>
  );
};

export default Event;
