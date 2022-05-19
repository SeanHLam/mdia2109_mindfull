import styled from "styled-components";
import {numberArr, linkArr} from "../data/resourcedata";
import {useState} from 'react';
import { faPhone, faLink, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resource from "../pages/resource";
import { questions, option1, option2 } from "../data/questiondata";
import { ImgDiv } from './images';



const ItemList = styled.li`
font-size: 14pt;
font-family: 'Oswald', sans-serif;
color:#6F5F5E;
list-style: none;
text-align:left;
&:nth-child(even){
    color: #3366BB;   
    text-decoration: underline;
    font-style:italic;
    font-size:12pt;
    margin-bottom:10pt;
}

`
const ResourceOutline = styled.div`
width: 230pt;
height: 250pt;
background-color:#DAE5E7;
border: 3px solid #6F5F5E;
border-radius: 26px;
box-sizing:content-box !important;
overflow-y:auto;
overflow-x:hidden;
z-index:5;
`

const ResourceBox = styled.div`
display:flex;
justify-content:center;
padding-top: 120px;
margin-bottom: 75px;
`
const ListBox = styled.div`
width:230px;
display:flex;
justify-content:center;
`
const FlowerCont = styled.div`
position:absolute;
left:53%;
top: 470px;
z-index: 0;
transform: rotate(25deg);
`

const TreeCont = styled.div`
position:absolute;
right:52%;
top: 460px;
z-index: 0;
transform: rotate(-25deg);
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
    const [background, setBackground] = useState("#D28A7C");

    const ToggleButton = styled.button`
    color:white;
    text-align:center;
    font-family:'Oswald', sans-serif;
    border-color: black;
    font-size:16pt;
    width: 115pt;
    border-radius: 22px 0px 0px 0px;
    border:none;
    background-color:${background};
    padding: 5pt 15pt 5pt 15pt;
    cursor:pointer;
    margin-bottom: 45px;
    `
    const rightbutton = {
    borderRadius:"0px 22px 0px 0px",
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
            <FlowerCont>
            <ImgDiv path ='/flower.svg' size= '10em'/>
            </FlowerCont>
            <TreeCont>
            <ImgDiv path ='/tree.svg' size= '10em'/>
            </TreeCont>
            <ResourceOutline>

                <ToggleButton 
                onClick={ () => { setFav("number"); ;} } style= {fav === "number" ? {backgroundColor: "#6F5F5E", boxShadow:"inset 0 0 4px black"} : {backgroundColor: "#D28A7C"}}>
                    <FontAwesomeIcon icon={faPhone} size="1x" color= {fav === "number" ? "#D28A7C" :  "#6F5F5E"} style={{marginRight: "5px"}}> </FontAwesomeIcon> 
                    NUMBERS 
                </ToggleButton>
                
                <ToggleButton
                style= {rightbutton}
                onClick={ () => {setFav("link");} } style= {fav === "link" ? {backgroundColor: "#6F5F5E",   borderRadius:"0px 22px 0px 0px", boxShadow:"inset 0 0 4px black"} : {backgroundColor: "#D28A7C",   borderRadius:"0px 22px 0px 0px",}}>
                    <FontAwesomeIcon icon={faLink} size="1x" color= {fav === "link" ? "#D28A7C" :  "#6F5F5E"} style={{marginRight: "5px"}}> </FontAwesomeIcon> 
                     LINKS 
                </ToggleButton>
                <ListBox>
                    <List arr= {listArr}/>
                </ListBox>
            
            
            
            
            </ResourceOutline>
        </ResourceBox>
    </div>

}