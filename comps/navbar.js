import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faLightbulb, faPhone, faFlag, faCircleInfo, faUserGroup, faX } from '@fortawesome/free-solid-svg-icons'
import { NavName, NavIcon, NavPath } from "../data/navdata";
import Router, { useRouter } from "next/router";
import {useState} from 'react';



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
 user-select: none;
`   
const LogoType = styled.img`
 height:2em;
 user-select: none;
`

const MenuCont = styled.div`
 position: absolute;
 left: 0;
 margin-left: 1em;
`

const NavBot = styled.div`
position:absolute;
top:95px;
display: flex;
background-color: #6F5F5E;
width: 100%;    
display: flex;
justify-content: center;
align-items: center;
z-index: 3;
// position: relative;
// height: 100%;
max-height:0px;
overflow:hidden;
transition: max-height 1.5s, display 1s;

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
max-height: 100%;
font-family: Oswald;
color: white;
font-size: 24pt;
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


export function NavBar(){
const r = useRouter()
const [toggle, setToggle] = useState(false)


function toggleState(){
    if (toggle === false) {
        setToggle(true)
    }else if(toggle === true){
        setToggle(false)
    } 
}

return <NavCont>
    <NavTop>   
    
    <MenuCont>
           
           {
            toggle === true &&
            <FontAwesomeIcon icon={faX} size="3x" color="white" 
                onClick={()=>toggleState()}>
            </FontAwesomeIcon>
            }

            {
            toggle === false &&
            <FontAwesomeIcon icon={faBars} size="3x" color="white" 
                onClick={()=>toggleState()} >
            </FontAwesomeIcon>
            }
   
   
    </MenuCont> 
        
        <LogoImage src="/browny1.svg" 
            onClick={()=>r.push({
                pathname: "/"
            })}
        ></LogoImage>
        
        <LogoType src="/LogoType.svg"
            onClick={()=>r.push({
            pathname: "/"
            })}
        ></LogoType>
    </NavTop>

    <NavBot style= {toggle ? {maxHeight: "400px"} : {height: "0%",}}>
        <NavUl>
            <NavLi
               onClick={()=> r.push({
                pathname: NavPath[0]
                })}>
                
            <IconCont>
                <FontAwesomeIcon icon={NavIcon[0]} color="white"></FontAwesomeIcon>
            </IconCont>
            {NavName[0]}
            </NavLi>

            <NavLi
               onClick={()=> r.push({
                pathname: NavPath[1]
                })}>
                
            <IconCont>
                <FontAwesomeIcon icon={NavIcon[1]} color="white"></FontAwesomeIcon>
            </IconCont>
            {NavName[1]}
            </NavLi>
            
            <NavLi
               onClick={()=> r.push({
                pathname: NavPath[2]
                })}>
                
            <IconCont>
                <FontAwesomeIcon icon={NavIcon[2]} color="white"></FontAwesomeIcon>
            </IconCont>
            {NavName[2]}
            </NavLi>

            <NavLi
               onClick={()=> r.push({
                pathname: NavPath[3]
                })}>
                
            <IconCont>
                <FontAwesomeIcon icon={NavIcon[3]} color="white"></FontAwesomeIcon>
            </IconCont>
            {NavName[3]}
            </NavLi>
            
            <NavLi
               onClick={()=> r.push({
                pathname: NavPath[4]
                })}>
                
            <IconCont>
                <FontAwesomeIcon icon={NavIcon[4]} color="white"></FontAwesomeIcon>
            </IconCont>
            {NavName[4]}
            </NavLi>

            <NavLi
               onClick={()=> r.push({
                pathname: NavPath[5]
                })}>
                
            <IconCont>
                <FontAwesomeIcon icon={NavIcon[5]} color="white"></FontAwesomeIcon>
            </IconCont>
            {NavName[5]}
            </NavLi>
            
            
            
            
            {/* {NavName.map((o,i)=><NavLi
                 onClick={()=> r.push({
                 pathname: NavPath[i]
                 })}
                
                >
                <IconCont>
                    <FontAwesomeIcon icon={NavIcon[i]} color="white"></FontAwesomeIcon>
                </IconCont>
                {NavName[i]
                
                
                }</NavLi>)}
             */}
            
            


        </NavUl>

    </NavBot>
</NavCont>
}

