import React from 'react'
import '../../assets/styles/uiKit/infoCard.scss'

const InfoCardBlock = (props) => {
    const { className = ''} = props
    return(
        <div className={`info-card-block ${className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default InfoCardBlock;