import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"

const GaleriaConatiner = styled.div`
    display:flex;
`

const SeccionFluida = styled.section`
    flex-grow:1;
`

const Galeria = ()=>{
    return (<>
        <Tag/>
        <GaleriaConatiner>
            <SeccionFluida>
                <Titulo>Navegue por la galería</Titulo>
            </SeccionFluida>
            <Populares>

            </Populares>
        </GaleriaConatiner>
    </>)
}

export default Galeria