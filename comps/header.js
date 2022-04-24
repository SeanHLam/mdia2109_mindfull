import styled from "styled-components";



const TextItem = styled.div`
font-size: 38pt;
text-align: center;
color: #6F5F5E;
font-family: 'Patrick Hand';
`

export function HeadText({text="text sample"}){
return <TextItem src={text}>{text}</TextItem>
}

