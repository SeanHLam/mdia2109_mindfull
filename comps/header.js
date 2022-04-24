import styled from "styled-components";



const TextItem = styled.div`
font-size: 38pt;
text-align: center;
color: #6F5F5E;
font-family: 'Patrick Hand';
`

export function HeadText({ text = "text sample", color = "#6F5F5E",
	placement = "static",
	marginTop = 'auto',
	fontSize= '38pt',

}) {
	return <TextItem src={text}
		style={{ color: color, position: placement, marginTop: marginTop, fontSize: fontSize }}
	>{text}</TextItem>
}

