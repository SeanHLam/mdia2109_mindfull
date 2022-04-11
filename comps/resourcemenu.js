import styled from "styled-components";
import {numberArr, linkArr} from "../data/resourcedata";
import {useState} from 'react';

const ItemList = styled.li`
font-size: 14pt;
color:black;
text-align:left;
list-style: none;
`
const ResourceOutline = styled.div`
width: 200px;
height: 350px;
background-color:#DAE5E7;
border: 1px solid black;
border-radius: 25px;
`
const ToggleButton = styled.button`
width: 10000pt;
`

export function ResourceBox(){
    return <ResourceOutline></ResourceOutline>
}

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
    const ChangeList = () => {
    }
    var listArr = [];
    if (fav === "number"){
        listArr = numberArr;
    } else if (fav === "link"){
        listArr = linkArr;
    }   
    return <div>
        <ToggleButton onClick={()=>setFav("number")}> Numbers </ToggleButton>
        <button onClick={()=>setFav("link")}> Links </button>
        <List arr= {listArr}/>
    </div>

}
