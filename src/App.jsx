import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Proyecto from "./components/Proyecto"
import Masterplan from "./components/Masterplan"
import Galeria from "./components/Galeria"
import Ubicacion from "./components/Ubicacion"
import Video from "./components/Video"
import favicon from './assets/images/logo.png'
import { Helmet } from "react-helmet"
// import TagManager from "react-gtm-module"
import Caracteristicas from "./components/Caracteristicas"
import Plano from "./components/Plano"
import Footer from "./components/Footer"
import Rs from "./components/Rs"


function App() {
  // TagManager.dataLayer({
  //   dataLayer:{
  //     path:'/',
  //     event:'pageview'
  //   }
  // })

  return (
    <>
      <Helmet>
         {/* Google tag (gtag.js)  */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16475744525"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', 'AW-16475744525');`}
        </script>
        {/* Meta Pixel Code */}
        <script>{`!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '167097733165412');
                fbq('track', 'PageView');
                `}</script>
                <noscript>{`<img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=167097733165412&ev=PageView&noscript=1"
                />`}</noscript>
                {/* End Meta Pixel Code  */}
      </Helmet>
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
      <Footer/>
      <Rs/>
    </>
  )
}

export default App
