import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabezera from "./components/Cabezera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"

const FondoGradiante = styled.div`
  background: linear-gradient(175deg,#041833 4.16%,#04244f 48%,#154580 96.76%);
  width:100%;
  min-height:100vh;

`
function App() {
 

  return (
    <>
      <FondoGradiante>
        <GlobalStyles/>
        <Cabezera/>
        <BarraLateral/>
        <Banner texto="¡Bienvenido a la galeria de fotos más completa del espacio!" backgroundImage={banner}/>
      </FondoGradiante>
    </>
  )
}

export default App
