import styled from "styled-components";

const TextItem = styled.div`
font-size: 48pt;
text-align: center;
color: #6F5F5E; 
`

export function HeadText({text="text sample"}){
return <TextItem>{text}</TextItem>
}

