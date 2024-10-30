import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login.js";
import MainContent from './components/organism/layoutHome.js';  // Certifique-se de que está usando o nome correto aqui

// Importando as páginas das subrotas
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
} from './components/pages/subroutesHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<MainContent />}>
          {/* Definindo subrotas */}
          <Route path="funcionarios" element={<FuncionariosRoute />} />
          <Route path="holerites" element={<HoleritesRoute />} />
          <Route path="documentos" element={<DocumentosRoute />} />
          <Route path="contas" element={<ContasPagarRoute />} />
          <Route path="eventos" element={<EventosRoute />} />
          <Route path="autorizacoes" element={<AutorizacaoRoute />} />
          <Route path="calendario" element={<CalendarioRoute />} />
          <Route path="reunioes" element={<ReunioesRoute />} />
          <Route path="ajuda" element={<AjudaRoute />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
