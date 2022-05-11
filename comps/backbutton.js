import styled, { keyframes }  from 'styled-components';

const bounceAnimation = keyframes`
50% {
    transform: translateY(-5px);
}

`;

const Button = styled.div`
margin: 2rem;
width: 100pt;
height: 40pt;
border-radius: 15pt;
font-size: 18pt;
color:#6F5F5E;
text-align: center;
vertical-align: middle;
border: solid 3px #D28A7C;
line-height: 40pt; 
font-family: 'Oswald';
user-select: none;
&:hover{
//     background-color: #f6feff;
    animation: 1s ${bounceAnimation} ;
`


export function BackButton({
    button_text="Back",
    onClick=()=>{}
}){
    return <Button onClick={onClick}>{button_text}</Button>
    }