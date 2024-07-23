import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Patients() {
  const pacientes = [
    {
      id: 1,
      nombre: "José Carrasco",
      contacto: "971 161 3927",
      fechaIngreso : '22/06/24 - 16:00hrs',
      temperatura: '39°',
      oxigenacion: '80',
      frecuenciaCardiaca: '57'
    },
    {
      id: 2,
      nombre: "José Carrasco",
      contacto: "971 161 3927",
      fechaIngreso : '22/06/24 - 16:00hrs',
      temperatura: '39°',
      oxigenacion: '80',
      frecuenciaCardiaca: '57'
    },
    {
      id: 3,
      nombre: "José Carrasco",
      contacto: "971 161 3927",
      fechaIngreso : '22/06/24 - 16:00hrs',
      temperatura: '39°',
      oxigenacion: '80',
      frecuenciaCardiaca: '57'
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleMenuClick = (event, patient) => {
    setAnchorEl(event.currentTarget);
    setSelectedPatient(patient);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedPatient(null);
  };

  const handleEdit = () => {
    alert(`Editar paciente: ${selectedPatient.nombre}`);
    handleMenuClose();
  };

  const handleDelete = () => {
    alert(`Eliminar paciente: ${selectedPatient.nombre}`);
    handleMenuClose();
  };

  return (
    <>
      <div >
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "15px",
            marginTop: "-3%",
            marginLeft:'-3%'
          }}
        >
          <Table sx={{marginTop: '2%'}}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#0A7AA6",  }}>Paciente</TableCell>
                <TableCell sx={{ color: "#0A7AA6" }}>Contacto</TableCell>
                <TableCell sx={{ color: "#0A7AA6" }}>Fecha de Ingreso</TableCell>
                <TableCell sx={{ color: "#0A7AA6" }}>Temperatura</TableCell>
                <TableCell sx={{ color: "#0A7AA6" }}>Oxigenacion</TableCell>
                <TableCell sx={{ color: "#0A7AA6" }}>Frecuencia Cardiaca</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pacientes.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>{patient.nombre}</TableCell>
                  <TableCell>{patient.contacto}</TableCell>
                  <TableCell>{patient.fechaIngreso}</TableCell>
                  <TableCell>{patient.temperatura}</TableCell>
                  <TableCell>{patient.oxigenacion}</TableCell>
                  <TableCell>{patient.frecuenciaCardiaca}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={(event) => handleMenuClick(event, patient)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={
                        Boolean(anchorEl) && selectedPatient?.id === patient.id
                      }
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={handleEdit}>Editar</MenuItem>
                      <MenuItem onClick={handleDelete}>Eliminar</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}