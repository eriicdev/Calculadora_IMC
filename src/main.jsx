import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './components/Header/header.css'
import Header from './components/Header/Header.jsx'

import Calculadora from './components/Calculadora/Calculadora.jsx';
import './components/Calculadora/calculadora.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Calculadora />
  </StrictMode>,
)
