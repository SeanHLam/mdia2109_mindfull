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
color:#F6FEFF;
text-align: center;
vertical-align: middle;
background-color: #D28A7C;
line-height: 40pt; 
font-family: 'Oswald';
user-select: none;
&:hover{
    background-color: #8E6057;
    animation: 1s ${bounceAnimation} ;
`


export function SmallButton({
    button_text="Next",
    onClick=()=>{}
}){
    return <Button onClick={onClick}>{button_text}</Button>
    }