import styled from "styled-components"

const FigureEstilizada = styled.figure`
    background-image:${props=> `url(${props.$backgroundImage})`};
    flex-grow:1;
    background-repeat:no-repeat;
    display:flex;
    align-items:Center;
    min-height:328px;
    margin: 0pX;
    border-radius:28px;
    max-width:100%;
    background-size:cover;
`;

const TituloEstilizado = styled.h1`
    font-weight:400;
    font-size:48px;
    line-height:48px;
    color:#FFFFFF;
    max-width:300px;
    padding:0 64px;

`
const Banner = ({texto,backgroundImage}) => {
    return <FigureEstilizada $backgroundImage={backgroundImage}>
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
}

export default Banner