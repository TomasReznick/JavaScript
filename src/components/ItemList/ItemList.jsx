import React from "react";
import './ItemList.css'
import Item from '../Item/Item'
import Button from '../Button/counterButton'

function ItemList(props){

    return(
        <React.Fragment>
            <div id="ItemListContainer" className="container-img">
            {
            props.items?.map((item)=>{
                return(
                <div key={item} className="content-count-button">
                    <Item item={item} />
                    <Button initial="1" product={item.model} price={item.price}/>
                </div>)})
            }
            </div>
        </React.Fragment>
        )
}

export default ItemList
