import styled from "styled-components";

const Bubble = styled.div`
position: relative;
margin: 2rem;
width: 250pt;
height: 150pt;
border-radius: 8pt;
font-size: 18pt;
color:#F6FEFF;
text-align: left;
padding: 1rem;
vertical-align: middle;
background-color: #94A9AC;
line-height: 40pt; 
font-family: 'Patrick Hand';

&:after {
  content: '';
	position: absolute;
	bottom: 0;
	left: 10%;
	width: 0;
	height: 0;
	border: 30pt solid transparent;
	border-top-color: #94A9AC;
	border-bottom: 0;
	border-left: 0;
	margin-left: 10pt;
	margin-bottom: -30px;
}

`

export function SpeechBubble({
  speech_text="Hello! I am Browny, and I will walk you through a set of 5 questions so I can understand you better. ",
  onClick=()=>{}
}){
  return <Bubble onClick={onClick}>{speech_text}</Bubble>
  }