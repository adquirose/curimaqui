import Header from "./components/Header"
import Masterplan from "./components/Masterplan"
import Navigation from "./components/Navigation"
import Proyecto from "./components/Proyecto"
import favicon from './assets/images/logo.png'
import { Helmet } from "react-helmet"
function App() {
  
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
    </>
  )
}

export default App
