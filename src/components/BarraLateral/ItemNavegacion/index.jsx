
const ItemNavegacion = ({children,iconoActivo,iconoInactivo,activo=false}) => {
    return <>
        <img src={activo ? iconoActivo : iconoInactivo} alt="estado del icono"></img>
        {children}
    </>

}

export default ItemNavegacion