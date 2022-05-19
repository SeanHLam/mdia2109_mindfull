import styled from "styled-components";



const TextItem = styled.div`
font-size: 16pt;
text-align: center;
color: #6F5F5E;
font-family: 'Dm Sans';
white-space: pre-line;
transition: opacity 1s;
`

export function ParaText
    ({ text = "text sample",
        color = "#6F5F5E",
        placement = "static",
        marginRight = "auto",
        marginLeft = "auto",
        marginTop = "auto",
        marginBottom = "auto",
        fontSize = "14pt",
        textAlign = "center",
        opacity="100"

    }) {
    return <TextItem
        src={text}
        style={{ opacity:opacity,color: color, position: placement, marginRight: marginRight, marginLeft: marginLeft, marginTop: marginTop, marginBottom: marginBottom, fontSize: fontSize, textAlign: textAlign }}
    >{text}</TextItem>
}

