import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login.js";
import Home from './components/pages/home.js'
import {
AjudaRoute,
AutorizacaoRoute,
CalendarioRoute,
ContasPagarRoute,
DocumentosRoute,
EventosRoute,
GestaoFuncionariosRoute,
HoleritesRoute,
ReunioesRoute} from './components/pages/subroutesHome.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

        {/* sub-rotas de home */}
        <Route path="GestaoFuncionarios" element={<GestaoFuncionariosRoute />} /> 
        <Route path="Holerites" element={<HoleritesRoute />} /> 
        <Route path="Documentos" element={<DocumentosRoute />} /> 
        <Route path="ContasAPagar" element={<ContasPagarRoute />} /> 
        <Route path="Eventos" element={<EventosRoute />} /> 
        <Route path="Autorizacoes" element={<AutorizacaoRoute />} /> 
        <Route path="Calendario" element={<CalendarioRoute />} /> 
        <Route path="Reunioes" element={<ReunioesRoute />} /> 
        <Route path="Ajuda" element={<AjudaRoute />} />


      </Routes>
    </Router>
  );
}

export default App;
