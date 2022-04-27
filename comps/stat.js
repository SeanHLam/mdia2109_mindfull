import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking, faUtensils, faBed, faCloud } from '@fortawesome/free-solid-svg-icons'
import { NavName, NavIcon, NavPath } from "../data/navdata";
import Router, { useRouter } from "next/router";
import {useState} from 'react';



const StatCont = styled.div`
display:flex;
flex-direction:row;
justify-content: left;
margin 1em;
`



const StatList  = styled.ul`
margin: 0;
`
const ListItem = styled.li`
font-size: 18pt;
color: #6F5F5E;
font-family: 'Dm Sans';
text-align: left;
white-space: pre-line;
`


export function Stat({
    point1="sample",
    point2="test",
    statIcon={faPersonWalking}

}){
    return <StatCont>
        <FontAwesomeIcon icon={statIcon} size="4x" color="#D28A7C"></FontAwesomeIcon>
        <StatList>
            <ListItem>{point1}</ListItem>
            <ListItem>{point2}</ListItem>
        </StatList>

        
    </StatCont>
}