import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import Espera from '../Espera/Espera';
import Historial from '../Historial/Historial';
import Canceladas from '../Canceladas/Canceladas';
import { FaList } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import './Menu.css';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const NavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='main-Menu'>
      <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="nav tabs" 
        className="tabs-Container"
      >
        <Tab 
          label="Lista de espera" 
          className="tab-Wait" 
          sx={{ 
            marginRight: 1, 
            borderTopLeftRadius: '15px', 
            borderTopRightRadius: '15px', 
            boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)', 
            fontSize: '.7rem', 
            position: 'relative' 
          }}
          icon={<FaList className="icon" />} 
        />
        <Tab 
          label="Historial" 
          className="tab-History" 
          sx={{ 
            marginRight: 1, 
            borderTopLeftRadius: '15px', 
            borderTopRightRadius: '15px', 
            boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)', 
            fontSize: '.7rem',
            position: 'relative'
          }}
          icon={<MdHistory className="icon" />} 
        />
        <Tab 
          label="Cancelados" 
          className="tab-Cancels" 
          sx={{ 
            borderTopLeftRadius: '15px', 
            borderTopRightRadius: '15px', 
            boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)', 
            fontSize: '.7rem',
            position: 'relative' 
          }}
          icon={<MdOutlineCancel className="icon" />} 
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Espera />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Historial />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Canceladas />
      </TabPanel>
    </div>
  );
}

export default NavTabs;
