import styled, { keyframes }  from 'styled-components';
// import Router, { useRouter } from "next/router";

const pulseAnimation = keyframes`
0% {
    transform: scale(1.0);
}

25% {
    transform: scale(1.1);
}

`;

const Scale = styled.div`
margin: 1rem;
width: 35pt;
height: 35pt;
line-height: 35pt;
background-color: #8EAAAC;
border-radius: 50%;
font-size: 18pt;
color:#F6FEFF;
text-align: center;
vertical-align: middle;
Font-family: 'DM Sans';
margin-top: 2em;
border: 1pt solid #8EAAAC;
animation: 1.5s ${pulseAnimation} infinite ;
`


export function MindScale ({
    scaleNum="1",
    backgroundColor = "#8EAAAC",
    onClick=()=>{},


}){
    return <Scale 
    onClick={onClick}
    src={scaleNum}
    style={{ backgroundColor: backgroundColor, animation:null}
}
    >{scaleNum}</Scale>
}


