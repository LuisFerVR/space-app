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
                    <ItemNavegacion iconoActivo="iconos/home-activo.png" iconoInactivo="iconos/home-inactivo.png" activo>HOME</ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/mas-vistas-activo.png" iconoInactivo="iconos/mas-vistas-inactivo.png">MÁS VISTAS</ItemNavegacion>
                </ListaEstilizda>
            </nav>
        </aside>
    )
}
export default BarraLateral