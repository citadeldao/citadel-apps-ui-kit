import React from "react";

import '../../assets/styles/uiKit/unbondedBlock.scss';

const UnbondedBlockItem = (props) => {
    const {   
        title, 
        textColor,    
        className='',
        children,
        data,
        index,
        childrenLength
    } = props

    return (
        <div className={`unbonded-card-item-block ${className}`}>
            <div className="unbonded-card-item">
                <div>
                    <div className="unbonded-card__token">
                        <h2 style={{color: textColor}}> {title} </h2>
                    </div>
                    {!data && children}
                </div>
                { index < childrenLength - 1 &&
                    <div className='unbonded-card-item-span'></div>
                }   
            </div>
        </div>
    )
}

export default UnbondedBlockItem