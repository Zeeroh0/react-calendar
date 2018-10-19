import React from 'react';
import dateFns from "date-fns";


const Event = ({ title, date, icDimType }) => {

  // Figure out color coding based off of icDimType
  
  return (
    <div className='event' onClick={() => alert(`Clicked on ${title} which occurs on ${dateFns.format(date, 'MMM Do')}`)} >
      <div className="title">{title}</div>
    </div>
  );
};

export default Event;
