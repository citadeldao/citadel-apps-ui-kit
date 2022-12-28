import React from "react";
import PoolCardItem from "./PoolCardItem";

import '../../assets/styles/uiKit/poolCard.scss';

const PoolCard = (props) => {
    const {
        data, 
        leftText, 
        claim, 
        rightText,
        nativeAmountColor, 
        externalAssetColor, 
        removeBtn, 
        bottomText, 
        bottomNativeColor, 
        bottomBgColor, 
        topBgColor, 
        className = ''
    } = props
    
    return (
        <div className={`pool-card-container ${className}`} style={props.style}>
            <PoolCardItem 
                data={data} 
                leftText={leftText} 
                claim={claim} 
                rightText={rightText} 
                nativeAmountColor={nativeAmountColor} 
                externalAssetColor={externalAssetColor} 
                removeBtn={removeBtn} 
                bottomBgColor={topBgColor}
            />
            <div className="pool-card-info">
                <PoolCardItem 
                    data={data} 
                    leftText={bottomText} 
                    nativeAmountColor={bottomNativeColor} 
                    externalAssetColor={bottomNativeColor} 
                    bottomBgColor={bottomBgColor} 
                    deadline='14:00 UTC - Oct 1st' 
                    text='NEXT UNLOCK' 
                    day='312'
                />
            </div>
        </div>
    )
}

export default PoolCard