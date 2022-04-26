import {useState, useRef} from 'react';
import styled from "styled-components";




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
    //display: image ? "block" : "none"
}}
onClick={onClick}   
/> 
}

