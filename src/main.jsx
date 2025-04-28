import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <LanguageProvider> 
   <RouterProvider router={routes}></RouterProvider>
   </LanguageProvider>
  </StrictMode>,
)
