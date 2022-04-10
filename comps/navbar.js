import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const NavCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 6em;
background-color: #6F5F5E;
`

const LogoImage = styled.img`
object-fit: contain;
`



export function NavBar()
{
return <NavCont>
    
    
    test
    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
    <LogoImage src="browny2.svg"></LogoImage>

    </NavCont>
}

