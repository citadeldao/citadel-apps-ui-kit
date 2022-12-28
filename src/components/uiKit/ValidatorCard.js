import React from 'react';
import Icon from './Icon';

import '../../assets/styles/uiKit/validatorCard.css';

const ValidatorCard = (props) => {
    const {
        text, 
        text2, 
        symbol, 
        showArrow, 
        amount, 
        validatorData, 
        className = '', 
        onClick = () => {}
    } = props

    return (
        <div className={`validator-card-item ${className}`} onClick={onClick} style={props.style}>
            <div className='no-validator-card'>
                <div>
                    <h2>{text}</h2>
                    <div className='validator-data'>
                        <img src={validatorData?.imageSource} alt='node' />
                        <h4>{validatorData?.name}</h4>
                        <p className='validator-fee-txt'> Fee: <span className='validator-fee-amount'>{validatorData?.fee}</span>%</p>
                    </div>
                </div>
                <div className='validator-amount-block'>
                    <h2>{text2}</h2>
                    <h3 className='validator-amount'>{amount} <span>{symbol}</span></h3>
                    { showArrow && 
                        <Icon name="angle-right" color="#C3D6EC"/>
                    }
                </div>
            </div>
        </div>
    )
} 

export default ValidatorCard