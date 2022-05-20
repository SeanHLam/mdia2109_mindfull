import Head from 'next/head'

import { HeadText } from "../../comps/header";
import {ParaText} from "../../comps/body"
import styled from 'styled-components';
import {ResourceMenu, ResourceBox} from "../../comps/resourcemenu";
import {numberArr, linkArr} from "../../data/resourcedata";
import {useState} from 'react';
import {NavBar} from "../../comps/navbar";
import {LargeButton} from "../../comps/largebutton";
import {SmallButton} from "../../comps/smallbutton";
import { ImgDiv } from '../../comps/images';

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const FirstAnimation = styled.div`
animation: fadeDown 1s ease-in-out forwards
`

const ButtonAnimation = styled.div`
opacity:0%;
animation: fadeUp 1s ease-in-out forwards;
animation-delay: 1s;
margin-top: 1.5em;
`

const SecondAnimation = styled.div`
opacity:0%;
animation: fadeUp 1s ease-in-out forwards;
animation-delay: 1.5s;
margin-right:25px;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/brownyfavicon.svg" />
      </Head>
      <NavBar></NavBar>
      
      <Cont>
      <FirstAnimation>
      <ImgDiv path='/browny1.svg' size='8em' marginTop='3em' left="12em" placement="absolute"></ImgDiv>
      <HeadText text="Explore," textAlign="left" marginTop="1em"></HeadText>
      <HeadText text="And Learn!" textAlign="left" marginTop="-0.25em"></HeadText>
      <ParaText text="No matter who you are, we can all struggle from mental health issues." marginTop='-3px' fontSize='12pt' width='300px' textAlign = "left"></ParaText>
      </FirstAnimation>

      <ButtonAnimation>
      <LargeButton button_text="Measure your Mindfullness" next="quiz"></LargeButton>
      {/* <HeadText text="or"></HeadText> */}
      <LargeButton button_text="Try our Activities" next="activities" style={{marginTop:"1em"}}></LargeButton>
      </ButtonAnimation>

      <SecondAnimation>
      <HeadText text="What is" textAlign="right" marginTop="25px"></HeadText>
      <HeadText text="Mindfullness?" textAlign="right" marginTop="-0.25em"></HeadText>
      <ParaText text="And why is it important?" textAlign="right" fontSize="12pt" marginTop='-3px' ></ParaText>
      <ParaText text="It's a basic human ability to be fully present, aware of where we are. When we're mindful, we reduce stress, enhance overall performance and suspend judgment." fontSize="14pt"textAlign="right" width="300px" marginTop="15px"></ParaText>
      </SecondAnimation>
      
      </Cont>
    
      
    </div>
  )
}
