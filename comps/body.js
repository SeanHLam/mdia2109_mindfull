import styled from "styled-components";



const TextItem = styled.div`
font-size: 24pt;
text-align: center;
color: #6F5F5E;
font-family: 'Dm Sans';
`

export function ParaText(
    {text="text sample"})
{
return <TextItem>{text}</TextItem>
}

