import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MenuTabs from '../../components/MenuTablas/Menu'

import './Home.css';




export default function Home() {  

  return (

    
    <>
    <Navbar />

    <div className="main-Home">
    <MenuTabs />
    </div>

    </>
  )
}
