import styled from "styled-components";



const ImageItem = styled.img`
width: 20em;
height: auto;
padding: 20pt;
margin-left: auto;
margin-right: auto;
position: relative;
display: block;
z-index: auto;
top: auto;
`



export function ImgDiv({ onClick=()=>{},
path="/browny2.svg", 
size="20em", 
placement="relative", 
opacity="100%", 
zIndex='auto', 
marginRight='auto', 
marginLeft='auto', 
top= 'auto'}){
return <ImageItem 
src={path} 
style={{width: size, position: placement, opacity: opacity, zIndex: zIndex, marginRight: marginRight, marginLeft: marginLeft, top: top}}
onClick={onClick} 
/> 
}