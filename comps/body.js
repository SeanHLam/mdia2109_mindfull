import styled from "styled-components";



const TextItem = styled.div`
font-size: 16pt;
text-align: center;
color: #6F5F5E;
font-family: 'Dm Sans';
`

export function ParaText
    ({ text = "text sample",
        color = "#6F5F5E",
        placement = "static",
        marginRight = "auto",
        marginLeft = "auto",
        marginTop = "auto",
        marginBottom = "auto",

    }) {
    return <TextItem
        src={text}
        style={{ color: color, position: placement, marginRight: marginRight, marginLeft: marginLeft, marginTop: marginTop, marginBottom: marginBottom }}
    >{text}</TextItem>
}

