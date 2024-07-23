import React from 'react';
import './Navbar.css';
import { CiSettings, CiCalendarDate } from "react-icons/ci";
import { format } from 'date-fns';
import es from 'date-fns/locale/es';

export default function Navbar() {

  const today = new Date();
  const formattedDate = format(today, 'dd MMMM yyyy', { locale: es });

  return (
    <>
      <div className="Nav-main">
        <div className='info-Nav'>
          <span>
            <img src="/Logo.png" alt="Logo Navbar" className='logo-Nav' />
          </span>

          <div className='doc-Nav'>
            <span><img src="" alt="" /></span>
            <h2>Dr. Joel Miller</h2>
            <p>Medico General</p>
          </div>

          <div className='date-Nav'>
            <span><CiCalendarDate className='icon-Date' /> </span>
            <div className='date-Text'>
              <h3>Hoy</h3>
              <p>{formattedDate}</p>
            </div>
          </div>
        </div>

        <div className='icons-Nav'>
          <span><CiSettings /></span>
          <span><CiSettings /></span>
          <span><CiSettings /></span>
          <span><CiSettings /></span>
          <span><CiSettings /></span>
        </div>
      </div>
    </>
  )
}
