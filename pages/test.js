import Head from 'next/head'

import { HeadText } from "../comps/header";
import {ParaText} from "../comps/body"

import {ResourceMenu, ResourceBox} from "../comps/resourcemenu";
import {numberArr, linkArr} from "../data/resourcedata";
import {useState} from 'react';
import {NavBar} from "../comps/navbar";
import {LargeButton, QueButton} from "../comps/largebutton";
import {SmallButton} from "../comps/smallbutton";
import {Arrow} from "../comps/arrow";

<Head>
<title>Create Next App</title>
<meta name="description" content="Generated by create next app" />
<link rel="icon" href="/brownyfavicon.svg" />
</Head>


export default function Test(){


    return <div>


          <NavBar></NavBar>


          <HeadText text="Welcome to Mindfull"></HeadText>
          <ParaText></ParaText>


    



            <ResourceMenu></ResourceMenu>
            <LargeButton></LargeButton>
            <SmallButton onClick></SmallButton>
            <QueButton></QueButton>
            <Arrow></Arrow>

        </div>
}



