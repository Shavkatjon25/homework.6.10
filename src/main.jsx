import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { register } from 'swiper/element/bundle';
import './index.css'
import Ikkinchisi from './Ikkinchisi.jsx';
import Asax from './asax.jsx';
import Uz from './Uz.jsx';
register();
ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='ota'>
    <div className='flex'>
        <App></App>
        <Ikkinchisi></Ikkinchisi>
    </div>
    <div className='flex'>
        <Asax></Asax>
        <Uz></Uz>
    </div>

    </div>
)
