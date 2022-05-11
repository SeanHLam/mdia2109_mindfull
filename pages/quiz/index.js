import Head from 'next/head'
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import { speech } from "../../data/speechdata";
import { ResourceMenu, ResourceBox } from "../../comps/resourcemenu";
import { numberArr, linkArr } from "../../data/resourcedata";
import { useState } from 'react';
import { NavBar } from "../../comps/navbar";
import { LargeButton } from "../../comps/largebutton";
import { SmallButton } from "../../comps/smallbutton";
import { BackButton } from "../../comps/backbutton";
import { ImgDiv } from '../../comps/images';
import { SpeechBubble } from '../../comps/speechbubble';

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const ButtCont = styled.div`
display: flex;
flex-direction: row;
`

export default function Instruction() {
  const r = useRouter();
  var { snum } = r.query;

  if (snum === undefined) {
    snum = 0;
  }

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

        {/* <SpeechBubble></SpeechBubble> */}
        <SpeechBubble speech_text={speech[snum]}></SpeechBubble>

        <ImgDiv path='/browny.gif' size='25 rem'></ImgDiv>


        <ButtCont>
          {Number(snum) === 0 &&
            <BackButton button_text="Back" onClick={() => r.push({
              pathname: "/home/",
              query: {
                snum: (Number(snum) - 1 <= 0) ? 0 : Number(snum) - 1
              }
            }, null, {scroll:false})}>
            </BackButton>
          }

          {Number(snum) > 0 &&
            <BackButton button_text="Back" onClick={() => r.push({
              pathname: "/quiz/",
              query: {
                snum: (Number(snum) - 1 <= 0) ? 0 : Number(snum) - 1
              }
            }, null, {scroll:false})}>
            </BackButton>
          }



          {Number(snum) < 3 &&
            <SmallButton onClick={() => r.push({
              pathname: "/quiz/",
              query: {
                snum: (Number(snum) + 1 >= speech.length) ? speech.length - 1 : Number(snum) + 1
              }
            }, null, {scroll:false})}>
            </SmallButton>
          }

          {Number(snum) === 3 &&
            <SmallButton button_text="Let's start" onClick={() => r.push({
              pathname: "/quiz/questions",

            }, null, {scroll:false})}>
            </SmallButton>
          }


        </ButtCont>
      </Cont>
    </div>
  )
}
