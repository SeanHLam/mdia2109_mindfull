import Head from 'next/head'
import styled, { keyframes } from 'styled-components';

import { HeadText } from "../../comps/header";
import { ParaText } from "../../comps/body"

import { ResourceMenu, ResourceBox } from "../../comps/resourcemenu";
import { numberArr, linkArr } from "../../data/resourcedata";
import { useState } from 'react';
import { NavBar } from "../../comps/navbar";
import { LargeButton } from "../../comps/largebutton";
import { SmallButton } from "../../comps/smallbutton";
import { ImgDiv } from '../../comps/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMoon, faCloud } from '@fortawesome/free-solid-svg-icons'


const bubbleAnimation = keyframes`
0% {
    transform: scale(1.0);
}

25% {
    transform: scale(1.2);
}
`;

const floatAnimation = keyframes`
0% {
    transform: translateX(-150px);
}

25% {
    transform: translateX(200px);
}
`;


const Cont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`;

// const CloudCont = styled.div`
// margin-right: 20rem;
// margin-top: -12rem;
// animation: 2s ${floatAnimation} infinite;
// position: static;
// `

const StarCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-right: 20rem;
margin-top: -12rem;
animation: 2s ${bubbleAnimation} infinite ;

`

  ;
const StarCont2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-left: 10rem;
margin-top: 12rem;
animation: 2s ${bubbleAnimation} infinite ;
`
  ;

const MoonCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-left: 18rem;
margin-top: -22rem;
animation: 4s ${bubbleAnimation} infinite ;
`
  ;
const CloudCont = styled.div`
margin-right: 18rem;
margin-top: 2rem;
animation:50s ${floatAnimation} infinite;
position: static;
`
  ;

const CloudCont2 = styled.div`
margin-left: 12rem;
margin-top: 1rem;
animation:55s ${floatAnimation} infinite;
position: static;
`
  ;

const Cont2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-top: 22rem;
`;

export default function About() {

  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/brownyfavicon.svg" />
      </Head>

      <main>
        <NavBar></NavBar>

        <Cont>

          <HeadText text="Who are we?" marginTop="3rem"></HeadText>

          <ParaText marginLeft="2rem" marginRight=" 3rem" marginTop="2rem" text="Mindfull team is a group of students from BCIT who want to create an application that can assist users to maintain their mental wellbeing."></ParaText>

          <CloudCont>
            <FontAwesomeIcon icon={faCloud} size="3x" color="#f6feff"></FontAwesomeIcon>
          </CloudCont>

          <CloudCont2>
            <FontAwesomeIcon icon={faCloud} size="2x" color="#f6feff"></FontAwesomeIcon>
          </CloudCont2>



          <HeadText text="Our Mission" marginTop="3rem"></HeadText>

          <ParaText marginLeft="2rem" marginRight=" 3rem" marginTop="2rem" text="Mindfull's mission is to provide information about  mental health in a fun and interactive way, all to help people handling stress."></ParaText>




          <ImgDiv path='/raccoon_4.png' size='20rem' placement='relative' opacity='100%'
            top="4rem" marginLeft='1rem' marginRight='1rem' ></ImgDiv>




        </Cont>

        <StarCont>
          <FontAwesomeIcon icon={faStar} size="2x" color="#f6feff"></FontAwesomeIcon>
        </StarCont>

        <StarCont2>
          <FontAwesomeIcon icon={faStar} size="2x" color="#f6feff"></FontAwesomeIcon>
        </StarCont2>

        <MoonCont>
          <FontAwesomeIcon icon={faMoon} size="3x" color="#D28A7C"></FontAwesomeIcon>
        </MoonCont>


        <Cont2>
          <LargeButton button_text="Try our Activities" next="activities"></LargeButton>

          <LargeButton button_text="Measure your Mindfullness" next="quiz"></LargeButton>
        </Cont2>




      </main>


    </div>
  )
}
