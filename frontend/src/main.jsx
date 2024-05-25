import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* class="dark" */}
    <Navbar />
    <App />
    <Footer/>
  </React.StrictMode>,
)
