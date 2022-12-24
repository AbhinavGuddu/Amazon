import React from 'react';
 import "./rightSide.css";
 import Rating from '@mui/material/Rating';
 import getSymbolFromCurrency from 'currency-symbol-map'

function Product(props) {
    return (
        <div className='product'>
        <div className='product__image'><img src={props.definition.image} height="280px" alt=''/></div>
        <div className='product__name'>{props.definition.name}</div>
        <div className='product__rating'><Rating name="half-rating" defaultValue={2.5} precision={4} style={{fontSize:"20px"}} />{props.definition.rating}</div>
        <div className='product__price'>{getSymbolFromCurrency('INR')}{props.definition.price}</div>
        </div>
        
    );
}

export default Product;