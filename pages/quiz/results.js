import Head from 'next/head'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking, faUtensils, faMoon, faCloud } from '@fortawesome/free-solid-svg-icons'
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
import { ButtLinks, Results, Summary, Resimg } from '../../data/resultsdata';
import { Stat } from '../../comps/stat';


// if (typeof window !== 'undefined'){
//   if(optionnum.length===5){
//     localStorage.setItem("options", JSON.stringify(optionnum))
//   }   
  
//   var storedOptions = JSON.parse(localStorage.getItem("options"))
// }

if (typeof window !== 'undefined'){
  var storedOptions = JSON.parse(localStorage.getItem("options")|| [])
}

console.log(storedOptions)

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

const ResultCont = styled.div`
width: 20rem;
height:fit-content;
border: solid 10px #8EAAAC; 
border-radius: 8pt;
`

const SummCont = styled.ul`
border: solid 10px #8EAAAC; 
border-radius: 8pt;
`


export default function Quiz() {
  const scale = [0, 1, 1, 2, 3];
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
          <Divider />

          <HeadText text={`Your mindfulness score: ${mindScore} / 5`} color="#6F5F5E" marginTop="1rem" fontSize="28pt"></HeadText>
          <ImgDiv path={Resimg[mindScore - 1]} padding="0" > </ImgDiv>
          <ScaleCont>
            {scale.map((o, i) => <MindScale key={scale}
              scaleNum={i + 1}
              backgroundColor={mindScore === i + 1 ? '#D28A7C' : "#8EAAAC"}

            > </MindScale>)}
          </ScaleCont>
          <ImgDiv path='/scaleArrow.png' size='28rem' marginLeft="0" marginRight="0" padding="0" marginBottom-="-1em" ></ImgDiv>

          <ImgDiv path='/singleCloud.png' size='25rem' placement='static' opacity='100%' top='5rem' marginLeft='1rem' marginRight='1rem'></ImgDiv>
          <SummCont>
            {Summary.map((o, i) =>
              <Bullet key={Summary}
                text={Summary[i].option[storedOptions[i]].txt}
              >
              </Bullet>)}
          </SummCont>

          <Arrow></Arrow>
          <ImgDiv path='/brownyAdvice.png' size='25rem' placement='static' opacity='100%' top='5rem' marginLeft='1rem' marginRight='1rem'></ImgDiv>


          <ResultCont>
            {Results.map((o, i) =>

              <Stat key={results}
                point1={Results[i].choices[optionnum[i + 1]].text1}
                point2={Results[i].choices[optionnum[i + 1]].text2}
                statIcon={Results[i].icon}
              >
              </Stat>)}
          </ResultCont>
          <ImgDiv path='/browny.gif' size='25 rem' padding="0"></ImgDiv>


          <ImgDiv path='/related.png' size='25rem' placement='static' opacity='100%' top='5rem' marginLeft='1rem' marginRight='1rem'></ImgDiv>
          {ButtLinks.map((o, i) =>
            <LargeButton key={ButtLinks}
              button_text={ButtLinks[i].name}
              next={ButtLinks[i].path}
            >
            </LargeButton>)}

        </Cont>
      </main>
    </div>
  )
}





