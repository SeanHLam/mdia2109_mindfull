import Head from 'next/head'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking, faUtensils, faBed, faCloud } from '@fortawesome/free-solid-svg-icons'
import { HeadText } from "../../comps/header";
import { ParaText } from "../../comps/body"
import { ques, StoreAn, GetOptions, addMind, mindScore, options, optionnum } from "../../data/questiondata"
import { ResourceMenu, ResourceBox } from "../../comps/resourcemenu";
import { numberArr, linkArr } from "../../data/resourcedata";
import { useState } from 'react';
import { NavBar } from "../../comps/navbar";
import { LargeButton } from "../../comps/largebutton";
import { SmallButton } from "../../comps/smallbutton";
import { MindScale } from "../../comps/mindscale";
import { ImgDiv } from '../../comps/images';
import { Arrow } from '../../comps/arrow';
import { Bullet } from '../../comps/bullet';
import { ButtLinks, Results, Summary } from '../../data/resultsdata';
import { Stat } from '../../comps/stat';

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const ScaleCont = styled.div`
margin: 0;
align-items: center;
justify-content: center;
display: flex;
`

const Divider = styled.div`
margin: 1em;

`


export default function Quiz() {
  const scale = [0,1,1,2,3];
  return (
    <div>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/brownyfavicon.svg" />
      </Head>

      <main>

        <NavBar></NavBar>



        <Cont>

          <ImgDiv path='/leaves.gif' size='30rem' placement='absolute' opacity='40%'></ImgDiv>

          <ImgDiv path='/singleCloud.png' size='25rem' placement='static' opacity='100%' top='5rem' marginLeft='1rem' marginRight='1rem'></ImgDiv>

          {/* <HeadText text="Summary" color="#F6FEFF" placement="relative" marginTop="4rem"></HeadText> */}


          <ul>
            {Summary.map((o,i)=>
            
            <Bullet
              text={Summary[i].option[optionnum[i]].txt}
            >
            </Bullet>)}
          </ul>

          
          <ScaleCont>
            {scale.map((o,i) => <MindScale
            scaleNum= {i+1}
            backgroundColor= {mindScore === i+1 ? '#D28A7C' :"#8EAAAC"  }
            m
            > </MindScale>)}
          </ScaleCont>

          <ImgDiv path='/scaleArrow.png' size='28rem' marginLeft="0" marginRight="0" padding="0" marginBottom-="-1em" ></ImgDiv>


          <HeadText text={`Your mindfulness score: ${mindScore} / 5`}  color="#6F5F5E" marginTop="1rem" fontSize="28pt"></HeadText>

          <Arrow></Arrow>

          <ImgDiv path='/brownyAdvice.png' size='25rem' placement='static' opacity='100%' top='5rem' marginLeft='1rem' marginRight='1rem'></ImgDiv>



          {Results.map((o,i)=>
          
          <Stat
          point1={Results[i].choices[optionnum[i+1]].text1}
          point2={Results[i].choices[optionnum[i+1]].text2}
          statIcon={Results[i].icon}
          >
          </Stat>)}

          <Divider></Divider>
          <Divider></Divider>
          {ButtLinks.map((o,i)=>
          
          <LargeButton
          button_text={ButtLinks[i].name}
          next={ButtLinks[i].path}
          >
          </LargeButton>)}
          
        </Cont>

        {/* <ImgDiv path='/brownyexplain.svg' size='10rem' padding='1pt' placement="absolute"></ImgDiv> */}

        
      </main>


    </div>
  )
}





