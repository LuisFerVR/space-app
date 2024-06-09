import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabezera from "./components/Cabezera"
import BarraLateral from "./components/BarraLateral"
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
      </FondoGradiante>
    </>
  )
}

export default App
