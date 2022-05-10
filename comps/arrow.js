// import 'animate.css';
import styled, { keyframes }  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { bounce } from 'react-animations';


const bounceAnimation = keyframes`
0% {
    transform: translateY(-15px);
}

25% {
    transform: translateY(-15px);
}



`;

const AnimatedArrow = styled.div`
margin: 2rem;
height: 35pt;
width: 35pt;
line-height: 42pt;
background-color: #94A9AC;
color: #F6FEFF;
border-radius: 50%;
text-align: center;
vertical-align: middle;
// animation: 1s ${bounceAnimation} infinite alternate;
 

`
export function Arrow() {
    return <AnimatedArrow>
        <FontAwesomeIcon icon={faArrowDown} size='2x' ></FontAwesomeIcon>
    </AnimatedArrow>
}
 
 

