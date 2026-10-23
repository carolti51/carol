import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Operacion} from './operacion.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Operacion />
  </StrictMode>,
)
