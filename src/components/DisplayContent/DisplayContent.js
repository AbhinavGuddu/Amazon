import React from 'react';
import LeftSidePannel from './LeftSide/LeftSidePannel';
import RightSidePannel from './RightSide/RightSidePannel';

function DisplayContent(props) {
    return (
        <div style={{ display: 'flex'}}>
            <div>
                <LeftSidePannel />
            </div>
            <div>
                <RightSidePannel />
            </div> 
        </div>
    );
}

export default DisplayContent;