import styled from "styled-components";



const LiItem = styled.li`
font-size: 14pt;

color: #6F5F5E;
font-family: 'Dm Sans';
white-space: pre-line;
`

export function Bullet
    ({ text = "text sample",
        color = "#6F5F5E",
        placement = "static",
        marginRight = "2em",
        marginLeft = "auto",
        marginTop = "auto",
        marginBottom = "1em",

    }) {
    return <LiItem
        
        style={{ color: color, position: placement, marginRight: marginRight, marginLeft: marginLeft, marginTop: marginTop, marginBottom: marginBottom }}
    >{text}</LiItem>
}

