import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// {product.status === 'new' ? <div className="new">New</div>: ''}
// {product.status === 'hot' ? <div className="hot">Hot</div>: ''}