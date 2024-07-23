import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/register/Register';
import NotFound from './pages/NotFound/NotFound';
import Patients from './pages/PatientsHistory/PatientsHistory';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path='/Patients' element={<Patients/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
