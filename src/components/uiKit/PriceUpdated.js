import React from "react";
import Icon from './Icon';
import Button from '../uiKit/Button';

import '../../assets/styles/uiKit/priceUpdated.css'

const PriceUpdatedCard = (props) => {
    const {
        text, 
        acceptPrice, 
        className = ''
    } = props

    return (
        <div className={`price-updated ${className}`} style={props.style}>
            <div className="row">
                <div className="price-updated__icon" style={{ background: `#00B2FE26`}}>
                    <Icon name='alarm-octagon' width="24" color="#00B2FE"/>
                </div>
                <p>{text}</p>
            </div>
            <Button onClick={acceptPrice} type='small' textColor='#5639E0' bgColor='#C6D1FF'>Accept</Button>
        </div>
    )
}

export default PriceUpdatedCard