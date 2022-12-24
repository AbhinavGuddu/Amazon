import React from 'react';
import { Link } from 'react-router-dom';
function OrderLogs() {
    return (  
     <div>
     <div  style={{backgroundColor:"#EEBA37"}}><marquee><h3>We are currently working on this project, we became very Glad if you review this project, we all are ears</h3></marquee></div>
     <div className='empty_Cart' style={{height: "30em",width:"100%",textAlign:"center" }}><h3>Dear Buyer's You have no orders</h3><Link to={'/display'}><img src="https://ik.imagekit.io/Amazons/amazon-image/amazon-image/_Pngtree_man_with_market_cart_in_7310643.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671895241359" style={{width:"28em",height: "30em",marginTop:"0.2em"}}/></Link></div>
     <Link to={'/display'}><div style={{float:"right"}}><button className='placeorder__button' style={{fontSize:"20px",color:"#111", backgroundColor:"#c89411",borderColor:"#99710d"}}>Shop Now</button></div></Link>
     </div>

    );
}

export default OrderLogs;
