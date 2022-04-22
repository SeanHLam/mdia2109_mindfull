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

export default function Quiz() {
  return (
    <div>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/brownyfavicon.svg" />
      </Head>

      <main>
      <NavBar></NavBar>
      </main>
      
      <Cont>
      <ImgDiv path='/brownyexplain.svg' size='50%'></ImgDiv>
      </Cont>
    
      
    </div>
  )
}
