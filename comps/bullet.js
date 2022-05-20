import styled from "styled-components";



const LiItem = styled.li`
font-size: 12pt;
color: #6F5F5E;
font-family: 'Dm Sans';
list-style-type: none;
// white-space: pre-line;
`
;

export function Bullet
    ({ text = "text sample",
        color = "#6F5F5E",
        placement = "static",
        marginRight = "2em",
        marginLeft = "auto",
        marginTop = "1em",
        marginBottom = "1em",
        

    }) {
    return <LiItem suppressHydrationWarning="true" 
        
        style={{ color: color, position: placement, marginRight: marginRight, marginLeft: marginLeft, marginTop: marginTop, marginBottom: marginBottom }}
    >{text}</LiItem>
}

