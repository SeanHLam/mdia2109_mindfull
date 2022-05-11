import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking, faUtensils, faSnooze, faCloud } from '@fortawesome/free-solid-svg-icons'
import { NavName, NavIcon, NavPath } from "../data/navdata";
import Router, { useRouter } from "next/router";
import { useState } from 'react';



const StatCont = styled.div`
display:flex;
flex-direction:row;
justify-content: left;
margin: 1em;
`
    ;


const StatList = styled.ul`
margin: 0;

`
    ;
const ListItem = styled.li`
font-size: 12pt;
color: #6F5F5E;
font-family: 'Dm Sans';
text-align: left;
// white-space: pre-line;
`
    ;

const IconCont = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: left;
width: 30pt;
`

const AdviceCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: auto;

`

export function Stat({
    point1 = "sample",
    point2 = "test",
    statIcon = { faPersonWalking }

}) {
    return <StatCont>
        <IconCont>
            <FontAwesomeIcon icon={statIcon} size="xl" color="#D28A7C"></FontAwesomeIcon>
        </IconCont>

        <StatList>
            <AdviceCont>
                <ListItem>{point1}</ListItem>
            </AdviceCont>

            <AdviceCont>
                <ListItem>{point2}</ListItem>
            </AdviceCont>
        </StatList>



    </StatCont>
}