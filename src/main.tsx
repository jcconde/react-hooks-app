import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PokemonPage } from "./03-examples/PokemonPage.tsx";

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonPage/>
  </StrictMode>,
)
