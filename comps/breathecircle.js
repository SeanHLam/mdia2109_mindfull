import styled, { keyframes } from 'styled-components';
// import Router, { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import { ImgDiv } from './images';
import { LargeButton } from './largebutton';
import { ParaText } from './body';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


const breatheAnim = keyframes`
0% {
    transform: scale(1);
}

50% {
    transform: scale(.2);
}

100% {
    transform: scale(1);
}

`;

const BreatheCont = styled.div`
margin-top: 1em;
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;

`

const CircleCont = styled.div`
width:20em;
height:20em;
background-color:#ABC7C9;
border-radius: 100%;
display:flex;
justify-content:center;
align-items: center;
margin: 1em;
// animation: 1.5s ${pulseAnimation} infinite ;
`

const IconCont = styled.div`
display:flex;
justify-content:center;
align-items: center;
opacity: ${props => props.opacity || 0};
transition: opacity .2s;
`

const Circle = styled.div`
display:flex;
justify-content:center;
align-items: center;
width:20em;
height:20em;
background-color:#6D8C8E;
border-radius: 100%;
animation: 9s ${props => props.anim || null} infinite ;
`

const breath_data = {
    active: {
        anim: breatheAnim,
        opacity: 0,
    }
    ,

    inactive: {
        anim: null,
        opacity: 100,
    }
    ,
}

const text_data = {
    in: {
        img: "/breathein.png",
    }
    ,

    out: {
        img: "/breatheout.png",
    }
    ,
}




export function BreatheCircle({

    active = false,
    textact = false,
    onSwitch = () => { },

}) {
    const [a_state, setAstate] = useState("inactive")
    const [txt_state, setTxtstate] = useState("in")


    function activeHandler() {
        setAstate(a_state === "inactive" ? "active" : "inactive")
        setTxtstate("in")
        clearInterval(refreshId);
        setTimeout(() => {
            setAstate(a_state === "active" ? "inactive" : "inactive")
        }, 27000);


    }
    if (a_state === "active") {
        var refreshId = setInterval(function () {
            setTxtstate(txt_state === "in" ? "out" : "in");
            clearInterval(refreshId);
        }, 4500);
    }

    if (a_state === "inactive") {
        clearInterval(refreshId);
    }

    return <BreatheCont>

        <CircleCont>
            <Circle
                anim={breath_data[a_state].anim}
            >
                <IconCont 
                    opacity={breath_data[a_state].opacity}
                >
                    <FontAwesomeIcon icon={faPlay} size="4x" color="white"
                        onClick={
                            () => activeHandler()
                        }>
                    </FontAwesomeIcon>
                </IconCont>
            </Circle>

        </CircleCont>

        <ParaText text="Click the arrow to start" opacity={breath_data[a_state].opacity}></ParaText>

        {a_state === "inactive" &&
            <ImgDiv path="/breathexplain.png" size="30em"></ImgDiv>

        }


        {a_state === "active" &&
            <ImgDiv path={text_data[txt_state].img} size="30em"></ImgDiv>

        }


    </BreatheCont>
}




