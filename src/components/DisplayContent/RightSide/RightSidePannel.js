import React, { useEffect,useState} from 'react';
import "./rightSide.css";
import Product from "./Product"
import { Link } from 'react-router-dom';

function RightSidePannel(props){
    const [listOfProduct,setListOfProducts] = useState([]);

    useEffect(()=>{
        //api call
        
        let list =[
            { id: 123456543, name : "Iphone10", rating: "34565", price: "4534",mrp:"55036", image:"https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867450"},
            { id: 54342265, name : "Iphone11", rating: "656", price:"76543456", mrp:"78955036",image:"https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867816"},
            { id: 123453456543, name : "Iphone12", rating: "8754", price:"76543",mrp:"88036", image:"https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867121"},
            { id: 12344545456543, name : "Iphone13", rating: "344574", price:"637357", mrp:"655036",image:"https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867105"},
            { id: 123465656543, name : "Apple14", rating: "8754", price:"76543", image:"https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867450"},
            { id: 2356346363, name : "samsung 15", rating: "637357", price:"50999",mrp:"55036", image:"https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608868086"},
            { id: 12346565654, name : "Iphone16", rating: "8754", price:"7654113",mrp:"875036", image:"https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867324"},
            { id: 23563463638, name : "Iphone17",rating:"34565", price:"76543",mrp:"985036", image:"https://ik.imagekit.io/Amazons/amazon-image/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668608867000"}
    
        ]
        
        setListOfProducts(list);
    },[]);

    return(
         <div className='RightSide_main'>
        {
        listOfProduct.map ( (item) =>(
            <Link to={`/order/`+item.id } >
          <Product definition={item} />
          </Link>
            
        ))
        }

</div>
    );
}
export default RightSidePannel;