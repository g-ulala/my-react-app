import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// rootはindex.htmlの<div id="root"></div>にあたる
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* このタグの名称はimport [App]部分にあたる */}
    <App />
  </StrictMode>
)
