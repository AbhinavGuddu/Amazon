import React from 'react';

// import React, { useContext } from 'react';
import "./Checkout.css";
// import { CartContext } from '../CartContext';
function CheckoutItems(props) {
//    { const {size,decrement} = useContext(CartContext);
//     const cartValue = function(){
//         let price=0;
//             for(let i=0;i<item.length;i++){
//                 price+=parseInt(item[i].price);
//             }
//             return price;
//        }
    return (
        <div>
            <div style={{ border: "1px solid #E7E7E7", width: "95%", display:"flex", height: "250px", margin: "25px"}}>
                <div style={{margin: "25px"}}>
                    <img height="200px" src={props.definition.image} alt='' />
                </div>
                <div style={{ marginTop: "20px"}}>
                    <div style={{fontSize: "20px"}} className="pricetextgap">{props.definition.name}</div>
                    <div style={{color:"#007600",fontWeight:"bolder"}}>In stock</div>
                    <div style={{ fontWeight: "bold", marginLeft:"30em"}} className="textgap">₹{props.definition.price}</div>
                    <div><span className='MRP'> Eligible for FREE shipping</span></div>
                    <img className='Amazon_choice' src='https://ik.imagekit.io/Amazons/amazon-image/amazon-image/fulfilled.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1670340882011'alt=''></img>
                    <div className='text'><strong>Colour:</strong> Space Blue</div>
                    <div className='text'><strong>Size name:</strong> 256 GB</div>
                    <div className='text'>EMI starts at {props.definition.emi} No cost EMI available</div>
                    <div style={{color:"#0066C0",fontFamily:"inherit",cursor:"pointer"}}>Delete</div>
                    
                </div>
            </div>
        </div>
                      //{<div></div><div> Subtotal ( {size} items): ₹<strong>{ cartValue() }</strong></div>*/}
    
    );
}

export default CheckoutItems;