
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
 
const AnimatedArrow = styled.div`
margin: 2rem;
height: 40pt;
width: 40pt;
line-height: 46pt;
background-color: #94A9AC;
color: #F6FEFF;
border-radius: 50%;
text-align: center;
vertical-align: middle;
`
 
export function Arrow() {
    return <AnimatedArrow>
        <FontAwesomeIcon icon={faArrowDown} size = '2x' ></FontAwesomeIcon>
    </AnimatedArrow>
}
