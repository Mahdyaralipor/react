import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { Home } from './Home.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Home />
)
