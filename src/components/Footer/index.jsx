import styled from "styled-components";

const ContenedorFooter = styled.footer`
    margin-top:24px;
    display:flex;
    justify-content:space-evenly;
    background-color: #001634;
    color:white;
`
const RedesSociales = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:0px;
    margin-bottom:0px;
`
const RedesSocialesLogos = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-top:0px;
    margin-bottom:0px;
`

const Autor = styled.div`
    display:flex;
    flex-direction:column;
`
const Logo = styled.img`
    width: 100px;
    height: auto;
`

const Footer = () => {
    return (
        <ContenedorFooter>
            <RedesSociales>
                <h2>Redes Sociales:</h2>
                <RedesSocialesLogos>
                    <p><a href="https://www.linkedin.com/in/vergararuizluisfernando/"><Logo src="/public/iconos/linkedin.png"/></a></p>
                    <p><a href="https://github.com/LuisFerVR"><Logo src="/public/iconos/GitHub.png"/></a></p>
                </RedesSocialesLogos>
            </RedesSociales>
            <Autor>
                <h2>Creación:</h2>
                <p>© 2024</p>
                <p>Hecho con 💙 por Luis Fernando Vergara Ruiz</p>
                <p>Curso:React styled components</p>
                <p>Manipulando archivos estáticos</p>
            </Autor>
        </ContenedorFooter>
    );
}

export default Footer;