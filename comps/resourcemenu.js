import styled from "styled-components";
import {numberArr, linkArr} from "../data/resourcedata";
import {useState} from 'react';
import { faPhone, faLink, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resource from "../pages/resource";

const ItemList = styled.li`
font-size: 14pt;
font-family: 'Oswald', sans-serif;
color:#6F5F5E;
list-style: none;
display:flex;
align-items:center;
`
const ResourceOutline = styled.div`
width: 220pt;
height: 200pt;
background-color:#DAE5E7;
border: 1px solid black;
border-radius: 26px;
box-sizing:content-box !important;
overflow-y:auto;
overflow-x:hidden;
white-space:nowrap;
`

const ResourceBox = styled.div`
display:flex;
justify-content:center;
padding:15px;
`


export function Item({
    text = "Item"
}){
    return <ItemList>
    {text}
    </ItemList>
}

export default function List({
    arr =[
    ]
}){
    return <div>
        <ul>
        {arr.map((o,i)=><Item text={o}/>)
        }
        </ul>
    </div>
}



export function ResourceMenu(){
    const [fav, setFav] = useState("number");
    const [background, setBackground] = useState("#D28A7C");
    
    /*const setStyle = (background, icon) => {
        setBackground(background);
        setIcon(icon);
    };*/
    var backGround = "";
    if (background === "#D28A7C"){
        backGround = "#8E6057";
    } else if (background === "#8E6057"){
        backGround = "#D28A7C";
    }

    const ToggleButton = styled.button`
    color:white;
    text-align:center;
    font-family:'Oswald', sans-serif;
    border-color: black;
    font-size:16pt;
    width: 110pt;
    border-radius: 25px 0px 0px 0px;
    border:none;
    background-color:${background};
    padding: 5pt 15pt 5pt 15pt;
    `

    const rightbutton = {
    borderRadius:"0px 25px 0px 0px"
    }

    var listArr = [];

    if (fav === "number"){
        listArr = numberArr; 

    } else if (fav === "link"){
        listArr = linkArr;
    }   

    return <div>
    <ResourceBox>
            <ResourceOutline>

                <ToggleButton 
                    onClick={ () => { setFav("number"); setBackground("#8E6057");} }>

                    <FontAwesomeIcon icon={faPhone} size="1x" color="#8E6057" marginRight="5px"> </FontAwesomeIcon>  NUMBERS </ToggleButton>
                
                <ToggleButton
                onClick={()=>setFav("link")} style= {rightbutton}>
                    <FontAwesomeIcon icon={faLink} size="1x" color="#8E6057" marginRight="5px"> </FontAwesomeIcon>  LINKS </ToggleButton>
                <List arr= {listArr}/>
            </ResourceOutline>
        </ResourceBox>
    </div>

}
