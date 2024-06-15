import styled from "styled-components"

const ItemsListaEstilizada = styled.li`
    font-size:24px;
    margin-bottom: 30px;
    line-height:28px;
    display: flex;
    align-items:center;
    gap:16px;
    color:${props=>props.$activo ? "#7B78E5" : "#D9D9D9"};
`
const ItemNavegacion = ({children,iconoActivo,iconoInactivo,activo=false}) => {
    return <ItemsListaEstilizada $activo={activo} >
        <img src={activo ? iconoActivo : iconoInactivo} alt="estado del icono"></img>
        {children}
    </ItemsListaEstilizada>

}

export default ItemNavegacion