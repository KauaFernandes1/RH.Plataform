import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login.js";
import Home from './components/pages/home.js';

// subrotas de home
import {
  AjudaRoute,
  AutorizacaoRoute,
  CalendarioRoute,
  ContasPagarRoute,
  DocumentosRoute,
  EventosRoute,
  FuncionariosRoute,
  HoleritesRoute,
  ReunioesRoute
} from './components/pages/subroutesHome.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Rota principal de Home com subrotas */}
        <Route path="/home" element={<Home />}>
          <Route path="/home/funcionarios" element={<FuncionariosRoute />} />
          <Route path="Holerites" element={<HoleritesRoute />} />
          <Route path="Documentos" element={<DocumentosRoute />} />
          <Route path="ContasAPagar" element={<ContasPagarRoute />} />
          <Route path="Eventos" element={<EventosRoute />} />
          <Route path="Autorizacoes" element={<AutorizacaoRoute />} />
          <Route path="Calendario" element={<CalendarioRoute />} />
          <Route path="Reunioes" element={<ReunioesRoute />} />
          <Route path="Ajuda" element={<AjudaRoute />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
