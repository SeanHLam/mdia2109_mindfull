import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { option1 } from "../data/questiondata";

const Button = styled.div`

margin: 2rem;
width: 220pt;
height: 40pt;
border-radius: 15pt;
font-size: 18pt;
color:#F6FEFF;
text-align: center;
vertical-align: middle;
background-color: #D28A7C;
line-height: 40pt; 
font-family: 'Oswald';
&:hover{
    background-color: #8E6057;
`

const Question = styled.div`

margin: 2rem;
width: 220pt;
height: 40pt;
border-radius: 15pt;
font-size: 18pt;
color:#F6FEFF;
text-align: center;
vertical-align: middle;
background-color: #8EAAAC;
line-height: 40pt; 
font-family: 'Oswald';
`
const QueCont = styled.div`

`


export function LargeButton({button_text="Happy Large Button", next="/home"}){
    const r = useRouter()
    
    
    return <Button
    onClick={()=> r.push({
    pathname: next
    })}
    >{button_text}</Button>
    }
    



export function QueButton({button_text="Happy Large Button", onClick=()=>{}}){
    const [options, setOptions] = useState()
    
    return <QueCont onClick={onClick}>
        
        
        <Question >
            {button_text}
        </Question>       
        

    
    </QueCont>
    }   


    // <Question
    // onClick={()=> setOptions("option1")} style= {options === "option1" ? {backgroundColor: "#6D8C8E"} : {backgroundColor: "#8EAAAC"}}
    // >{button_text}
    // </Question>   