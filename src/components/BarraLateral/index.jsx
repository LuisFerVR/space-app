import styled from "styled-components"

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
                    <li><a href="">Inicio</a></li>
                </ListaEstilizda>
            </nav>
        </aside>
    )
}
export default BarraLateral