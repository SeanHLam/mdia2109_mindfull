import styled from "styled-components";



const ImageItem = styled.img`
width: 30%;
height: auto;
padding: 20pt;
position: relative;
display: block;
`

export function ImgDiv({path="/browny2.svg"}){
return <ImageItem src={path}/> 
}