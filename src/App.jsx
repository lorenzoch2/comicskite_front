import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';

import Registrar from './views/Registrar';
import IniciarSesion from './views/IniciarSesion';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Importación de los Hooks que serán utilizados.

import Context from "./Context/Context";
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const globalState = { products, setProducts };

  return (
    <Router>
      <Context.Provider value={globalState}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/iniciar_sesion" element={<IniciarSesion />} />
        </Routes>
      </Context.Provider>
    </Router>
  );

}
export default App
