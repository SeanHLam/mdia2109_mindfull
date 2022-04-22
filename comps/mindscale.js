import styled from "styled-components";
// import Router, { useRouter } from "next/router";

const ScaleCont = styled.div`
display:flex;
flex-direction: column;

`

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

`



export function MindScale ({
    scale_num="1",

}){
    return <Scale> {scale_num}</Scale>
}


