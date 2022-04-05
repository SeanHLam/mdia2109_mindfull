import styled from 'styled-components'

const ItemList = styled.li`
font-size:12px;
`
const FooterCont = styled.div`
background:#DAF;
color:#666;
padding:10px;
`

export function Item({
    text="Item"
}){
    return <ItemList>
        {text}
    </ItemList>
}

export function ListFooter(){
    return <FooterCont>
        List Footer
    </FooterCont>
}

export default function List({
    arr=[
        "Item Number 1",
        "Item Number 2",
        "Item Numver 3",
    ]
}){
    return <div>
        <ul>
            {/*<Item text="Item number 1"></Item>
            <Item text="Item number 2"></Item>
            <Item text="Item number 3"></Item>*/}

            {
                arr.map((o,i)=><Item text={o}/>)
            }
        </ul>
        <ListFooter></ListFooter>
    </div>
}