
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import PageView from './components/PageView/index.jsx';
import Gracias from './components/Gracias'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'
import MetaPixel from './components/MetaPixel/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <PageView/>
      <MetaPixel/>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/gracias" element={<Gracias/>}/>
      </Routes>
    </BrowserRouter>
  ,
)
