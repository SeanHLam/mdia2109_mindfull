import Head from 'next/head'
import { HeadText } from "../../comps/header";
import { ParaText } from "../../comps/body"
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import { ResourceMenu, ResourceBox } from "../../comps/resourcemenu";
import { numberArr, linkArr } from "../../data/resourcedata";
import { useState } from 'react';
import { NavBar } from "../../comps/navbar";
import { LargeButton } from "../../comps/largebutton";
import { SmallButton } from "../../comps/smallbutton";
import { untidyImgs } from '../../data/sampledata';
import { ImgDiv, returnClick } from '../../comps/images';
import { Message } from '../../comps/messagebrowny';
import { message, speech, CleanUp } from '../../data/activitydata';
import { water } from '../../data/drinkdata';


const Cont = styled.div`
margin-top: 5em;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`



export default function WaterActivity() {
    const r = useRouter();
    var { wnum } = r.query;

    if (wnum === undefined) {
        wnum = 0;
    }

    return (
        <div>
            <Head>
                <title>Stay Hydrated Activity</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/brownyfavicon.svg" />
            </Head>

            <main>
                <NavBar></NavBar>
            </main>

            <Cont>
                <ImgDiv path={water[wnum].img} size="20em" onClick={() => r.push({
                    pathname: "/activities/drinkwater",
                    query: {
                        // wnum: (Number(wnum) + 1 >= water.img) ? water.img - 1 : Number(wnum) + 1
                        wnum: (Number(wnum) < 3) ? Number(wnum) + 1 : Number(wnum) 
                     
                    }
                })}></ImgDiv>

                <ParaText text="Tap the glass to drink water"></ParaText>
                <LargeButton button_text="Take me back" next="/activities"></LargeButton>

                

       

            </Cont>


        </div>
    )
} 