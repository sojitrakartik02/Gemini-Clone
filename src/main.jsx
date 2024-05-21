import 'regenerator-runtime/runtime';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvidrer from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
<ContextProvidrer>
<App />

</ContextProvidrer>
  
)
