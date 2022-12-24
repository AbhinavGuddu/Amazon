import React from 'react';
import "./AdvertisementOne.css";
function AdvertisementOne(props){
    return(
        <div className='AdevertisementOne_main'>
           <div className='AdevertisementOne_header'>Up to 70% off | Electronics Clearance store</div>
               <div className='AdevertisementOne_body'>
                     <img src = "https://ik.imagekit.io/Amazons/amazon-image/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668608865545" width={"280px"} alt="amazon" />
               </div>
               <div className='AdevertisementOne_footer'>see more</div>

       </div>
    );
}
export default AdvertisementOne;