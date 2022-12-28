import React from 'react';

import '../../assets/styles/uiKit/selectedCard.scss';

const SelectedCard = (props) => {
    const {
        label, 
        value, 
        amount, 
        borderColor, 
        isSelected, 
        amountColor,
        bgColor, 
        id, 
        changed, 
        selectedColor, 
        icon, 
        className = ''
    } = props

    const customStyle = {
        ...props.style,
        percentageText: {
            color: '#292929',
            paddingLeft:'3px',
            fontWeight: '400'
        },
        label: {
            color: isSelected ? '#292929' : '#292929'
        },
        amount: {
           color: isSelected ? '#3A5EE6' : amountColor,
        },
        block: {
            background: isSelected ? selectedColor : bgColor,
            borderColor: isSelected ? borderColor : '#C3D6EC'
        },
        text: {
            color: '#59779A'
        }
    }
    
    return (
        <label htmlFor={id} className={`selected-card-item ${className}`} style={customStyle.block}>
            <div className="select-card-item-left">
                <input type="radio" id={id} value={value} onChange={changed} checked={isSelected}/>
                <div className='sel-card-item-top'>
                    <span style={customStyle.text}>unbonding</span>
                    <p style={customStyle.text}>APR</p>
                </div>
            </div>
            <div className="select-card-item-right">
                <h2 style={customStyle.label}>{label}</h2>
                <h2 style={customStyle.amount} className="card-item-icon">{amount}<span style={customStyle.percentageText}> %</span>{icon}</h2>
            </div>
        </label>
    )
}

export default SelectedCard