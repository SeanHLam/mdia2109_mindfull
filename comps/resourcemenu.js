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
text-align:left;
`
const ResourceOutline = styled.div`
width: 230pt;
height: 250pt;
background-color:#DAE5E7;
border: 1px solid black;
border-radius: 26px;
box-sizing:content-box !important;
overflow-y:auto;
overflow-x:hidden;
`

const ResourceBox = styled.div`
display:flex;
justify-content:center;
padding:15px;
`
const ListBox = styled.div`
width:230px;
display:flex;
justify-content:center;
`

export function Item({
    text = "Item"
}){
    return <ItemList>
    {text}
    </ItemList>
}

export function List({
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
    const [background, setBackground] = useState("#8E6057");

    const ToggleButton = styled.button`
    color:white;
    text-align:center;
    font-family:'Oswald', sans-serif;
    border-color: black;
    font-size:16pt;
    width: 115pt;
    border-radius: 25px 0px 0px 0px;
    border:none;
    background-color:${background};
    padding: 5pt 15pt 5pt 15pt;
    cursor:pointer;
    `
    const rightbutton = {
    borderRadius:"0px 25px 0px 0px",
    backgroundColor:"#D28A7C"
    }
    
    var listArr = [];

    if (fav === "number"){
        listArr = numberArr; 

    } else if (fav === "link"){
        listArr = linkArr;
    };


    return <div>
    <ResourceBox>
            <ResourceOutline>

                <ToggleButton 
                onClick={ () => { setFav("number"); setBackground("#8E6057");}}>

                    <FontAwesomeIcon icon={faPhone} size="1x" color="#D28A7C" marginRight="5px"> </FontAwesomeIcon>  NUMBERS </ToggleButton>
                
                <ToggleButton
                style= {rightbutton}
                onClick={ () => {setFav("link");} }>
                    <FontAwesomeIcon icon={faLink} size="1x" color="#8E6057" marginRight="5px"> </FontAwesomeIcon>  LINKS </ToggleButton>
                <ListBox>
                    <List arr= {listArr}/>
                </ListBox>
            </ResourceOutline>
        </ResourceBox>
    </div>

}
