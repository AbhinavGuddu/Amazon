import React, { Component } from 'react';
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
import "./MainPage.css";
class MainPage extends Component {
    constructor(props) {
        super(props);
   this.state = {  }
    }
    render() { 
        return ( <div className='MainPage' >
        <div style={{paddingTop:"284px",display:"flex",flexWrap:"wrap"}}>
        <AdvertisementOne />
        <AdvertisementFour />
        <AdvertisementOne />
        <AdvertisementOne />
        <div style={{display:"flex",backgroundColor:"#EAEDED" ,width:"100%"}}>
        <AdvertisementOne />
        <AdvertisementFour />
        <AdvertisementOne />
        <AdvertisementOne />
        </div>
        </div>
        </div>
        
            );
    }
}
 
export default MainPage;