import { useContext,useEffect,useState } from 'react';
import React from 'react';
import "./PlaceOrder.css";
//  import grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

function PlaceOrder(props) {

    const {item,size,increment} = useContext(CartContext);
    const [productDetails,setProductDetails] = useState([]);
    let { id } = useParams();

    const addTOCart = function() {
        increment(productDetails);
    }

    useEffect(()=>{


      //api call
      let list = [
          {
              id: 123456543,
              name: "New Apple iPhone 10",
              rating: "34565",
              review: "1568",
              emi: "2321",
              delivery: "Sunday, Aug 10",
              price: "50999",
              mrp:"58036",
              status: "In stock",
              soldby: "Aprajita Electronics",
              image:
                  "https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867450",
              about: [
                  "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                  "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                  "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                  "Face ID for secure authentication",
                  "A13 Bionic chip with third-generation Neural Engine",
                  "Fast-charge capable",
                  "Cinematic mode now in 4K Dolby Vision up to 30 fps",
                  "Action mode for smooth, steady, handheld videos"
              ],
          },
          {
              id: 54342265,
              name: "New Apple iPhone 11",
              rating: "34565",
              review: "1230",
              emi: "1241",
              delivery: "Monday, September 18",
              price: "50999",
              mrp:"55036",
              status: "In stock",
              soldby: "Darshita Electronics",
              image:
                  "https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388",
              about: [
                  "Desription for iphone 11 -bla bla",
                  "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                  "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                  "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                  "Face ID for secure authentication",
                  "A13 Bionic chip with third-generation Neural Engine",
                  "Fast-charge capable",
                  "Cinematic mode now in 4K Dolby Vision up to 30 fps",
                  "Action mode for smooth, steady, handheld videos"
              ],
          },
          {
              id: 123453456543,
              name: "Iphone12",
              rating: "34565",
              review: "1021",
              emi: "2301",
              delivery: "Wednesday, Aug 22",
              price: "76543",
              mrp:"855036",
              status: "In stock",
              soldby: "Darshita Electronics",
              image:
                  "https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867121",
              about: [
                  "Desription for iphone 12 -bla bla",
                  "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                  "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                  "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                  "Face ID for secure authentication",
                  "A13 Bionic chip with third-generation Neural Engine",
                  "Fast-charge capable",
                  "Cinematic mode now in 4K Dolby Vision up to 30 fps",
                  "Action mode for smooth, steady, handheld videos"
              ],
          },
          {
              id: 12344545456543,
              name: "Iphone13",
              rating: "34565",
              review: "1895",
              emi: "2001",
              delivery: "Thrusday, Aug 18",
              price: "637357",
              mrp:"755036",
              status: "In stock",
              soldby: "Darshita Electronics",
              image:
                  "https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867105",
              about: [
                  "Desription for iphone 13 -bla bla",
                  "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                  "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                  "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                  "Face ID for secure authentication",
                  "A13 Bionic chip with third-generation Neural Engine",
                  "Fast-charge capable",
                  "Cinematic mode now in 4K Dolby Vision up to 30 fps",
                  "Action mode for smooth, steady, handheld videos"
              ],
          },
          // second row of images  
          {
              id: 123465656543,
              name: "Apple14",
              rating: "8754",
              review: "1856",
              emi: "1621",
              delivery: "Friday, Aug 18",
              price: "76543",
              mrp:"78036",
              status: "In stock",
              soldby: "Darshita Electronics",
              image:
                  "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
              about: [
                  "Desription for iphone 12 pro pmax -bla bla",
                  "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                  "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                  "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                  "Face ID for secure authentication",
                  "A13 Bionic chip with third-generation Neural Engine",
                  "Fast-charge capable",
                  "Cinematic mode now in 4K Dolby Vision up to 30 fps",
                  "Action mode for smooth, steady, handheld videos"
              ],
          },
          {
              id: 2356346363,
              name: "Samsung 15",
              rating: "637357",
              review: "1592",
              emi: "2401",
              delivery: "Saturday, Aug 18",
              mrp:"55036",
              price: "50999",
              status: "In stock",
              soldby: "Darshita Electronics",
              image:
                  "https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608868086",
              about: [
                  "Desription for Samsung 15",
                  "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                  "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                  "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                  "Face ID for secure authentication",
                  "A13 Bionic chip with third-generation Neural Engine",
                  "Fast-charge capable",
                  "Cinematic mode now in 4K Dolby Vision up to 30 fps",
                  "Action mode for smooth, steady, handheld videos"
              ],
          },
          {
            id: 12346565654,
            name: "Iphone16",
            rating: "8754",
            review: "1292",
            emi: "2081",
            delivery: "Sunday, Aug 12",
            mrp:"45136",
            price: "16543",
            status: "In stock",
            soldby: "Abhinav Electronics",
            image:
                "https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867324",
            about: [
                "Desription for iphone 16 ",
                "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                "Face ID for secure authentication",
                "A13 Bionic chip with third-generation Neural Engine",
                "Fast-charge capable",
                "Cinematic mode now in 4K Dolby Vision up to 30 fps",
                "Action mode for smooth, steady, handheld videos"
                
            ],
        },
        {
            id: 23563463638,
            name: "Iphone 17",
            rating: "34565",
            review: "1856",
            emi: "1621",
            delivery: "Wednesday, Aug 18",
            price: "76543",
            mrp:"985036",
            status: "In stock",
            soldby: "Darshita Electronics",
            image:
                "https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867000",
            about: [
                "Desription for iphone 17 ",
                "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                "Face ID for secure authentication",
                "A13 Bionic chip with third-generation Neural Engine",
                "Fast-charge capable",
                "Cinematic mode now in 4K Dolby Vision up to 30 fps",
                "Action mode for smooth, steady, handheld videos"
            ],
        },
      ];
      //fake API
      let itemfilter = list.filter ( item => {
          if(item.id == id) return item;
      })

      console.log(itemfilter); 
      setProductDetails(itemfilter[0]);
  },[]);
    return (
        <div>
        <Grid container>
            <Grid item xs = {5}>
            <img className='placeorder__image'src={productDetails.image} alt=''></img>
            </Grid>
         <Grid item xs = {4}>
            <div className='placeorder__description'>
            <div style={{frontSize:"2em",lineHight:"2em",fontWeight:"bolder",marginTop:"4em"}}>{productDetails.name}</div><div>
           <Rating name="half-rating" defaultValue={2.5} precision={4} style={{fontSize:"20px"}} />
           {productDetails.rating} ratings | {productDetails.review}+ answered questions</div>
           </div>
           <hr></hr>
        
           <div>
           <div className='textgap'>Price<span className='pricetag'><span className='inr_icon'><sup>₹</sup></span>{productDetails.price}<sup>00</sup></span></div>
           <div><span className='MRP'> M.R.P.: <strike>₹{productDetails.mrp}</strike></span></div>
           <img className='Amazon_choice' src='https://ik.imagekit.io/Amazons/amazon-image/amazon-image/fulfilled.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1670340882011'alt=''></img>
           <div style={{color:"#007600",fontWeight:"bolder"}}>{productDetails.status}</div>
           <div className='textgap'>Free delivery<span className=' pricetag'> {productDetails.delivery}</span></div>
           <div className='textgap'>EMI starts at ₹{productDetails.emi}. No cost EMI available<span className=' pricetag'> ₹50,999.00</span></div>
          <div>
          <div style={{fontSize:"20px"}}>About This Item</div>
          <ul>
          {
            productDetails.about!==undefined ? productDetails.about.map((item)=>(<li>{item}</li>)):<span></span>
            }
          </ul>  
          </div> 
          </div> 
          </Grid>     
           {/* Brand: Apple
            Model Name:	IPhone 12 128GB Green
            Network Service Provider	Unlocked for All Carriers
            OS	IOS 14
            Cellular Technology	5G
          </div> 
           <li>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
           <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
           <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
           <li>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</li>
           <li>Face ID for secure authentication</li>
           <li>A13 Bionic chip with third-generation Neural Engine</li>
           <li>Fast-charge capable</li>   */} 
                    
        
        
        
        
        <Grid item xs = {3}>
        <Paper varient ='outlined'className='placeorder__order'>
            <div>
            <div><strong>Without Exchange</strong></div>
            <div  className=' pricetag'>₹50,999</div><img className='Amazon_choice' src='https://ik.imagekit.io/Amazons/amazon-image/amazon-image/fulfilled.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1670340882011'alt=''></img>
            <div className='FreeDelivery'><span>FREE delivery </span><strong> {productDetails.delivery} </strong><span style={{color:"green"}}>Order within 10 hrs 51 mins</span>. <span>Details</span></div>
            <div style={{ marginTop: "10px"}}><strong>Add an Accessory</strong></div>
            <div>
                <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
                <label><input type="checkbox" ></input>Apple 20W USB Power Adapter</label>
            </div>
            <div > 
            
            <button className='placeorder__button addtocart' onClick={addTOCart}>Add to cart</button>
            <Link to="/checkout">
            <button className='placeorder__button buynow'>Buy Now</button></Link>
            <label><input type="checkbox" style={{marginTop: "10px"}}></input>Add gift options</label>
             </div>
             </div>
       </Paper>
       </Grid>
</Grid>
        </div>
        
    );
}

export default PlaceOrder;