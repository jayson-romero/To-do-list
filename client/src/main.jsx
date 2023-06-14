import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LocalStorageProvider} from './utils/LocalStorage'
import { APIProvider } from './utils/API'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalStorageProvider>
      <APIProvider>
        <App/>
      </APIProvider>
    </LocalStorageProvider>
  </React.StrictMode>,
)
