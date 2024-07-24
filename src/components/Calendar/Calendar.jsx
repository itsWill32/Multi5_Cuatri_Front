import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; 
import { format } from 'date-fns';
import es from 'date-fns/locale/es';

export default function CustomCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={onChange}
        value={date}
        locale={es}
        formatLongDate={(locale, date) => format(date, 'd MMMM yyyy', { locale })}
      />
    </div>
  );
}
