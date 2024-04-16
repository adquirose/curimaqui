import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Proyecto from "./components/Proyecto"
import Masterplan from "./components/Masterplan"
import Galeria from "./components/Galeria"
import Ubicacion from "./components/Ubicacion"
import Video from "./components/Video"
import Contacto from "./components/Contacto"
import favicon from './assets/images/logo.png'
import { Helmet } from "react-helmet"
import TagManager from "react-gtm-module"
import Caracteristicas from "./components/Caracteristicas"
import Plano from "./components/Plano"
import Footer from "./components/Footer"
import Rs from "./components/Rs"


function App() {
  TagManager.dataLayer({
    dataLayer:{
      path:'/',
      event:'pageview'
    }
  })

  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
        <title>Parcelas Curimaqui</title>
      </Helmet>
      <Navigation/>
      <Header/>
      <Proyecto/>
      <Masterplan/>
      <Caracteristicas/>
      <Galeria/>
      <Video/>
      <Ubicacion/>
      <Plano/>
      <Contacto/>
      <Footer/>
      <Rs/>
    </>
  )
}

export default App
