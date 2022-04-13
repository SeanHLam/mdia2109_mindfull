import styled from "styled-components";

const Button = styled.div`
margin: 2rem;
width: 220pt;
height: 40pt;
border-radius: 15pt;
font-size: 18pt;
color:#F6FEFF;
text-align: center;
vertical-align: middle;
background-color: #D28A7C;
line-height: 40pt; 
font-family: 'Oswald';
`


export function LargeButton({button_text="Happy Large Button"}){
    return <Button>{button_text}</Button>
    }