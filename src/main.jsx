
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Gracias from './components/Gracias'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'
// import TagManager from 'react-gtm-module';

// const tagManagerArgs = {
//   gtmId:'GTM-TWPQJ6X6'
// }
// TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/gracias" element={<Gracias/>}/>
      </Routes>
    </BrowserRouter>
  ,
)
