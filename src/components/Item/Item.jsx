import React from "react"

function Item(props){
    return (
        <React.Fragment>
            <div className="product-content">
                    <img className="img-size" src="../../Assets/Bebidas_3.jpg" alt=""/>
                    <h2 className="product-model">{props.item.model}</h2>
                    <div className="product-text">
                        <h4>Price: {props.item.price} ARS</h4>
                    </div>
            </div>
        </React.Fragment>
)}

export default Item