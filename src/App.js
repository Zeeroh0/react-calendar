import React from "react";

import Calendar from "./components/Calendar";

import "./App.scss";


const events = [
  { title: 'Event 0', date: '2018-09-30T00:00:00', subtitle: 'Subtitle 0' },
  { title: 'Event 1', date: '2018-10-01T00:00:00', subtitle: 'Subtitle 1' },
  { title: 'Event 2', date: '2018-10-11T00:00:00', subtitle: 'Subtitle 2' },
  { title: 'Event 3', date: '2018-10-21T00:00:00', subtitle: 'Subtitle 3' },
  { title: 'Event 4', date: '2018-10-31T00:00:00', subtitle: 'Subtitle 4' },
  { title: 'Event 5', date: '2018-10-31T00:00:00', subtitle: 'Subtitle 5' },
  { title: 'Event 6', date: '2018-11-03T00:00:00', subtitle: 'Subtitle 6' },
];

class App extends React.Component {
  render() {
    return (
      <div className='calendar-wrapper'>
        <Calendar events={events} />
      </div>
    );
  }
}

export default App;
