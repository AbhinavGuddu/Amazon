import React from 'react';
import "./LeftSide.css";
function LeftSidePannel(props){
    return(
    <div className='LeftSide_main'>
        <div className='LeftSide_Header'>Brand</div>
        <div className='LeftSide_Brandname'>
        <label className='brandname'>
        <input type="checkbox" value ="Apple"/> Apple
        </label>
        <label className='brandname'>
        <input type="checkbox" value ="Apple"/> Xiaomi
        </label>
        <label className='brandname'>
        <input type="checkbox" value ="Apple"/> Poco
        </label>
        <label className='brandname'>
        <input type="checkbox" value ="Apple"/> Realme
        </label>
        <label className='brandname'>
        <input type="checkbox" value ="Apple"/> Samsung
        </label>
        </div>
    </div>
    );
}
export default LeftSidePannel;