import styled from "styled-components"
import tags from "./tags.json"
const TagContainer = styled.section`
    display:flex;
    align-items:center;
    gap:64px;
    margin-top:56px;
`
const TagTitulo = styled.h3`
    font-size:24px;
    color:#D9D9D9;
    margin:0px;
`

const Tag = styled.button`
    font-size:24px;
    color: #FFFFFF;
    background-color:rgba(217,217,217,0.3);
    border-radius:10px;
    cursor:pointer;
    transition: background-color 0.3s ease;
    padding:12px;
    box-sizing:border-box;
    border: 2px solid transparent;
    &:hover{
        border-color:#c98cf1;
    }
`
const Div = styled.div`
    display:flex;
    gap:24px;
    justify-content:end;
`
const Tags=()=>{
    return <>
    <TagContainer>
        <TagTitulo>Buscra por tags: </TagTitulo>
        <Div>
            {tags.map(tag=>{
                return <Tag key={tag.id}>{tag.titulo}</Tag>
            })}
        </Div>
    </TagContainer>
    </>
}

export default Tags