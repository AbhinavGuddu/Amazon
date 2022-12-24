import React, { useContext } from 'react';
import "./Checkout.css";
import { Grid} from '@mui/material';
import CheckoutItems from './CheckoutItems';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

function Checkout(props){
    const {item,size,increment} = useContext(CartContext);
    const cartValue = function(){
    let price=0;
        for(let i=0;i<item.length;i++){
            price+=parseInt(item[i].price);
        }
        return price;
   }
    return(
        <div className='checkout__body'>
        <Grid container>
           <Grid item={1}>
           <div className='checkout__container'>
           <div style={{fontSize:"30px",fontWeight:"500",padding:"20px 0px 0px 20px"}}>Shopping Cart</div>
           <div>
           { 
            item.length >0 ?
            item.map( (value) => (
                <CheckoutItems definition={value} />
            ))
            : <div className='empty_Cart' style={{height: "30em",width:"100%",textAlign:"center" }}><h3>Please buy something</h3><Link to={'/display'}><img src="https://ik.imagekit.io/Amazons/amazon-image/amazon-image/_Pngtree_man_with_market_cart_in_7310643.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671895241359" style={{width:"28em",height: "30em",marginTop:"0.2em"}}/></Link></div>
        }
          { /*<CheckoutItems />
           <CheckoutItems />
           <CheckoutItems />
    <CheckoutItems />*/}
            
            <div style={{float:"center"}}> Subtotal ( {size} items): ₹<strong>{ cartValue() }</strong></div>
            <div style={{paddingTop:"25px"}}><button className='placeorder__button'>Proceed to Buy</button>
            </div>
            </div>
           </div>
           </Grid>
           <Grid item={2}>
           <div style={{width:"300px",height:"auto",padding:"20px",marginTop:"35px",background:"white"}}><div style={{ fontSize: "1em"}}>Subtotal ( {size} items): ₹<strong>{ cartValue() }</strong></div> <label><input type="checkbox" style={{margin:"4px"}}></input>This order contains a gift</label> 
           <div style={{paddingTop:"25px"}}><button className='placeorder__button'>Proceed to Buy</button>
           </div>
           </div>
           </Grid>
        </Grid>
        </div>
    )
}
export default Checkout;