import React from "react";
import UnbondedBlockItem from "./UnbondedBlockItem";

import '../../assets/styles/uiKit/unbondedBlock.scss';

const UnbondedBlock = (props) => {
    const { 
        children, 
        className='', 
        data
    } = props

    const elements = children?.length > 0 && children
        .filter(elem => typeof elem === 'object' && elem.hasOwnProperty('props'));

    return (
        <div className={`unbonded-block ${className}`} style={props.style}>
            <div className="unbonded-block__info">
                {elements.map((elem, i ) => (
                    <UnbondedBlockItem 
                        width={100/elements.length} 
                        title={elem.props.title} 
                        textColor={elem.props.textColor} 
                        className={elem.props.className} 
                        key={i} 
                        children={elem.props.children} 
                        index={i} 
                        childrenLength={elements.length} 
                        data={data}
                    >
                    </UnbondedBlockItem>
                ))}
            </div>
            {data && 
                <p className="unbonded-block__no">No Unbondings</p>
            }
        </div>
    )
}

export default UnbondedBlock