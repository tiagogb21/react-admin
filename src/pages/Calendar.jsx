import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

function Scheduler() {
  const [date, setDate] = useState(new Date());

  return (
    <main className="calendar__principal">
      <section>
        <h1 className="title-center">React Calendar</h1>
        <article className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </article>
        <p className="text-center">
          <span className="bold">Selected Date:</span>
          {' '}
          {date.toDateString()}
        </p>
      </section>
      <article className="schedule">
        <h2>{date.toDateString()}</h2>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Write here."
        />
      </article>
    </main>
  );
}

export default Scheduler;
