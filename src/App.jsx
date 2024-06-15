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

const AppContainer = styled.div`
  width : 1000px;
  max-width:100%;
  margin:0 auto;
`

const MainContainer = styled.main`
  display:flex;
  gap:24px;
`
function App() {
 

  return (
    <>
      <FondoGradiante>
        <GlobalStyles/>
        <AppContainer>
          <Cabezera/>
          <MainContainer>
            <BarraLateral/>
            <Banner texto="¡Bienvenido a la galeria de fotos más completa del espacio!" backgroundImage={banner}/>
          </MainContainer>
        </AppContainer>
      </FondoGradiante>
    </>
  )
}

export default App
