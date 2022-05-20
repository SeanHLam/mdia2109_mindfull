import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MessageData, ImageData} from "../data/resourceslider";
import React, {useState} from 'react';
import {ImgDiv} from './images';

const SliderCont=styled.div`
width: 255pt;
height: 250pt;
box-sizing:content-box !important;
display:flex;
align-items:center;
`
const SliderFlex=styled.div`
display:flex;
justify-content:center;
margin-top:45px;
`


const ArrowCont = styled.div`
display:flex;
flex-direction: row;
justify-content:center;
position:absolute;
`

const ContentCont =styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-content:center;
align-items:center;

`


export const ResourceSlider = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current -1);
    }

      
    console.log(current)
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return(
    <SliderFlex>
    <SliderCont>
            <ArrowCont>
                <ImgDiv
                path ='/left-arrow.png'
                size='4.5em'
                left='-15pt'
                onClick = {prevImage}
                display = {current === 0 ? "none" : "flex"}
                >
                </ImgDiv>
                <ImgDiv 
                path ='/right-arrow.png'
                size='4.5em'
                left= { current === 0 ? "219pt" : "165pt"} 
                onClick = {nextImage}
                display = {current === 3 ? "none" : "flex"}
                >
                </ImgDiv>
            </ArrowCont>

            <ContentCont>
            {ImageData.map((slide, index)=>{
            return (
                <div className ={index === current ? 'slide_active' : 'slide'} key=
                {index}>
                    {index === current && (<img src={slide.image} alt='images' className='slider_image'/>)}
                    
                </div>
            )
            })}

            {MessageData.map((item, index)=>{
            return (
                <div className ={index === current ? 'slide_active' : 'slide'} key=
                {index}>
                    {index === current && (<p className='slider_text'>{item.description} </p>)}
                    
                </div>
            )
            })}
            </ContentCont>

    </SliderCont>
    </SliderFlex>
    )
}

