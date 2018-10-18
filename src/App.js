import React from "react";

import Calendar from "./components/Calendar";

import "./App.css";


const events = [
  { title: 'Event 1', date: '2018-10-01T00:00:00', subtitle: 'Subtitle 1' },
  { title: 'Event 2', date: '2018-10-11T00:00:00', subtitle: 'Subtitle 2' },
  { title: 'Event 3', date: '2018-10-21T00:00:00', subtitle: 'Subtitle 3' },
  { title: 'Event 4', date: '2018-10-31T00:00:00', subtitle: 'Subtitle 4' },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calendar events={events} />
      </div>
    );
  }
}

export default App;
