import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/register/Register';
import NotFound from './pages/NotFound/NotFound';
import AddCita from './pages/AddCita/AddCita';
import PatientsHistory from './pages/PatientsHistory/PatientsHistory';
import Citas from './pages/Citas/Citas';
import ForoHistory from './pages/ForoHistory/ForoHistory';
import Patient from './pages/Patient/Patient';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path='/AddCita' element={<AddCita/>} />
      <Route path='/Citas' element={<Citas/>} />
      <Route path='/PatientsHistory' element={<PatientsHistory/>} />
      <Route path='/Patient' element={<Patient/>} />
      <Route path='/ForoHistory' element={<ForoHistory/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
