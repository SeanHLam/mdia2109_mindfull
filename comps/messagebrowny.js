import styled from "styled-components";
import { useState } from "react";
import { message, messageImgs } from "../data/activitydata";

const MessageItem = styled.img`
width: 20em;
height: auto;
padding: 20pt;
margin-left: auto;
margin-right: auto;
position: relative;
display: block;
top: auto;
`

export function Message({path=messageImgs, size="30em", placement="relative", opacity="100%"}){
    return <MessageItem src={path} style={{width: size, position: placement, opacity: opacity, }}/> 
    }

