import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import NumberList from './mapFilter.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NumberList />   
   </StrictMode>,
)

