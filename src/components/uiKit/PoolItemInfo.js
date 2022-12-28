import React from 'react'

import "../../assets/styles/uiKit/poolItem.scss"

const PoolItemInfo = (props) => {
    const {
        text, 
        amount, 
        symbol, 
        textColor, 
        symbolColor, 
        className = ''
    } = props
    
    const customStyle = {
        text: {
            color: textColor,
            fontWeight: 700
        },
        symbol: {
            color: symbolColor
        }
    }
    
    return (
        <div className={`pool-info-row ${className}`} style={props.style}>
            <p className='pool-info-text'>{text}</p>
            <p className='pool-info-text text-align-end' style={customStyle.text}>{amount} <span style={customStyle.symbol}>{symbol}</span></p>
        </div>
    )
}

export default PoolItemInfo