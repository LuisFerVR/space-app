import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion"

const ListaEstilizda = styled.ul`
    padding:0px;
    margin:0px;
    list-style:none;
`

const BarraLateral = () => {
    return(
        <aside>
            <nav>
                <ListaEstilizda>
                    <ItemNavegacion iconoActivo="iconos/home-activo.png" iconoInactivo="iconos/home-inactivo.png" activo>Inicio</ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/mas-vistas-activo.png" iconoInactivo="iconos/mas-vistas-inactivo.png">Más vistas</ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/me-gusta-activo.png" iconoInactivo="iconos/me-gusta-inactivo.png">Más me gusta</ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/nuevas-activo.png" iconoInactivo="iconos/nuevas-inactivo.png">Nuevas</ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/sorprendeme-activo.png" iconoInactivo="iconos/sorprendeme-inactivo.png">Sorpréndame</ItemNavegacion>
                </ListaEstilizda>
            </nav>
        </aside>
    )
}
export default BarraLateral