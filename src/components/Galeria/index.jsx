import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"

const GaleriaConatiner = styled.div`
    display:flex;
`

const SeccionFluida = styled.section`
    flex-grow:1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;
const Galeria = ({fotos=[],alSeleccionarFoto,alAlternarFavorito})=>{
    return (<>
        <Tag/>
        <GaleriaConatiner>
            <SeccionFluida>
                <Titulo>Navegue por la galería</Titulo>
                <ImagenesContainer>
                    {fotos.map(foto=><Imagen
                    alSolicitarZoom={alSeleccionarFoto}
                    key={foto.id} 
                    foto={foto}
                    alAlternarFavorito={alAlternarFavorito}/>
                    )}
                </ImagenesContainer>
            </SeccionFluida>
            <Populares>
            </Populares>
        </GaleriaConatiner>
    </>)
}

export default Galeria