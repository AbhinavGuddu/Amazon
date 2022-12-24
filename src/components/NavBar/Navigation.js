//import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
import { Router,Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import "./NavBar.css";

class Navbar extends Component {
    static contextType = CartContext;
    constructor(props) {
    super(props);
    this.state = {  }
    }
    render() { 
        let {item,size,increment} = this.context;
        return ( 
            <div>
        <div className='navbar_component'>
                <Link to={''}><div className='navbar_logo'></div></Link><div className='in_Text'>.in</div>
                <div className='navbar_locator'>
                    <div className='navbar_locatorImage'></div>
                    <div className='deliver_Text'>Deliver to Abhinav
                    <div className='navbar_location'>Madhepura 852131</div>
                </div>
             </div>
                <div className='navbar_searchcomponent'>
                    <div>
                        <select className="nav__dropdown">
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Books">Books</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Clothes">Clothes</option>
                         </select>
                    </div>
                    <div>
                    <input type="text" className="navbar__searchBox" /></div>

                    <div className="navbar__seaarchBoxdiv">
                        <div className="navbar__searchIcon" />
                    </div>
                </div>
                <div className="navbar_text navbar__signin">
                    <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
                    <div style={{ fontWeight:"bold", fontSize: "14px"}}>Account & List</div>
                </div>
                <Link to={'/orderlogs'} style={{textDecoration:"none"}}><div className="navbar_text navbar__returns">
                    <div style={{ fontSize: "14px"}}>Returns</div>
                    <div style={{ fontWeight:"bold", fontSize: "14px" }}> & Order</div>
                </div></Link>
                <Link to={'/checkout'}  style={{textDecoration:"none"}}> <div className="navbar_text navbar__cart">
                <div className="cart__image"></div>
                    <div className="cart__item">{size}</div>
                    <div className="navbar_text_cart">Cart</div>
                </div></Link>
         </div>
             <div className="navbar__footer">
                <div className="navbar__footer_text">Best Seller</div>
               <Link to={'/display'}> <div className="navbar__footer_text" style={{textDecoration:"none",color:"#ffff"}}>Mobile</div></Link>
                <div className="navbar__footer_text">Amazon Pay</div>
                <div className="navbar__footer_text">Fashion</div>
                <div className="navbar__footer_text">Electronics</div>
                <div className="navbar__footer_text">Prime</div>
                <div className="navbar__footer_text">New Release</div>
                <div className="navbar__footer_text">Home & Kitchen</div>
                <div src="" className="Download__image2"></div>
                <div className='Download__imageText'> Shopping made easy | Download The app</div>
                </div>
         </div>  
    
        );
    }
}
export default Navbar;