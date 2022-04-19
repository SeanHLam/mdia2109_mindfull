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

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
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
      <HeadText text="How are you today?"></HeadText>
      <LargeButton button_text="MEASURE YOUR MINDFULLNESS"></LargeButton>
      </Cont>
    
      
    </div>
  )
}
