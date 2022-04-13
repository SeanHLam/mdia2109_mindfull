import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faLightbulb, faPhone, faFlag, faCircleInfo, faUserGroup, faX } from '@fortawesome/free-solid-svg-icons'



const NavCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #6F5F5E;


`

const NavTop = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: .5em;
`

const LogoImage = styled.img`
 height:5em;
 margin-right: .5em;
 
`   
const LogoType = styled.img`
 height:3em;
`

const MenuCont = styled.div`
 position: fixed;
 left: 0;
 margin-left: 1em;
`

const NavBot = styled.div`
display: flex;
width: 100%;    
display: flex;
justify-content: center;
align-items: center;
z-index: 3;
position: relative;
`

const NavUl = styled.ul`
 display: flex;
 flex-direction: column;
 padding:0;
 width:100%;
 margin: 0;


`

const NavLi = styled.li`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
font-family: Oswald;
color: white;
font-size: 32pt;
list-style-type: none;
transition: background-color 1s;
&:hover{
    background-color: #8D7A79;
    background-color: #8D7A79;

}


`

const IconCont = styled.div`
 margin-right .3em;
`



export function NavBar()
{
return <NavCont>
    
    <NavTop
    >   <MenuCont>
            <FontAwesomeIcon icon={faBars} size="3x" color="white"></FontAwesomeIcon>
        </MenuCont> 
        <LogoImage src="browny1.svg"></LogoImage>
        <LogoType src="LogoType.svg"></LogoType>
    </NavTop>

    <NavBot>
        <NavUl>

            <NavLi>
                <IconCont>
                    <FontAwesomeIcon icon={faHouse}  color="white"></FontAwesomeIcon>
                </IconCont>
                Home
            </NavLi>
            <NavLi>
                <IconCont>
                    <FontAwesomeIcon icon={faHouse}  color="white"></FontAwesomeIcon>
                </IconCont>
                Home
            </NavLi>


        </NavUl>

    </NavBot>
</NavCont>
}

