import styled from "styled-components";

const Titulo = styled.h2`
    font-size: 32px;
    color: #7b7be5;
    text-align:${props=>props.$align?props.$align:'left'}
`

export default Titulo