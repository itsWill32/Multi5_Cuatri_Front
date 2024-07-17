import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/register/Register'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Register" element={<Register/>} />
      {/* <Route path="/AddProduct" element={<AddProduct/>} />
      <Route path="/CreateElection" element={</>} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
