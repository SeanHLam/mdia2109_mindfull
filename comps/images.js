import styled from "styled-components";



const ImageItem = styled.img`
width: 30%;
height: auto;
padding: 20pt;
margin-left: auto;
margin-right: auto;
position: relative;
display: block;
`

export function ImgDiv({path="/browny2.svg", size="20%", placement="relative", opacity="100%", onClick=()=>{}}){
return <ImageItem src={path} style={{width: size, position: placement, opacity: opacity}} onClick={onClick}/> 
}