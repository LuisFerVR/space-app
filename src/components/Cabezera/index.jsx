import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0px;
    display:flex;
    justify-content: space-between;
    img{
        width:212px;
    }
`

const Cabezera = ({setConsulta})=>{
    return <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo space-app" />
        <CampoTexto setConsulta={setConsulta}/>
    </HeaderEstilizado>
}

export default Cabezera