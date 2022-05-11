import {useState, useRef} from 'react';
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
50% {
    transform: translateY(5px);
}

`;


const ImageItem = styled.img`
width: 20em;
height: auto;
padding: auto;
margin-left: auto;
margin-right: auto;
margin-bottom:auto;
margin-top:auto;
position: relative;
display: block;
z-index: auto;
top: auto;
left:auto;
`


const ImageQue = styled.img`
&:hover{
    animation: 1s ${bounceAnimation} ;
`




    


export function ImgDiv({ 




    
onClick=()=>{},
path="/browny2.svg", 
size="20em", 
placement="relative", 
opacity="100%", 
padding = "20pt",
zIndex='auto', 
marginRight='auto', 
marginLeft='auto', 
marginBottom='auto',
marginTop='auto',
top= 'auto',
left='auto',
display= "block"
}){

const [image, setImage] = useState(true)


function toggleImg(){
            setImage(false)
        }

return <ImageItem 
src={path} 
style={{display: display,width: size, position: placement, opacity: opacity, zIndex: zIndex, marginRight: marginRight, marginLeft: marginLeft, marginTop: marginTop,marginBottom: marginBottom, top: top, left:left, padding: padding, 

}}
onClick={onClick}   
/> 
}

export function ImgQue({ 




    
    onClick=()=>{},
    path="/browny2.svg", 
    size="20em", 
    placement="relative", 
    opacity="100%", 
    padding = "20pt",
    zIndex='auto', 
    marginRight='auto', 
    marginLeft='auto', 
    marginBottom='auto',
    marginTop='auto',
    top= 'auto',
    left='auto',
    display= "block"
    }){
    
    return <ImageQue 
    src={path} 
    style={{display: display,width: size, position: placement, opacity: opacity, zIndex: zIndex, marginRight: marginRight, marginLeft: marginLeft, marginTop: marginTop,marginBottom: marginBottom, top: top, left:left, padding: padding, 
    
    }}
    onClick={onClick}   
    /> 
    }
    
