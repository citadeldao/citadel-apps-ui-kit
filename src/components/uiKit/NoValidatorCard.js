import React from 'react';
import Icon from './Icon';
import classNames from 'classnames';

import '../../assets/styles/uiKit/validatorCard.css';

const NoValidatorCard = (props) => {
    const {
        text, 
        label, 
        className = '', 
        onClick = () => {}
    } = props
   
    return (
        <div className={classNames('validator-card-item', 'no-validator-card-item' , className)} onClick={onClick} style={props.style}>
            <div className='no-validator-card'>
                <div>
                    <h2>{text}</h2>
                    <div className='validator-icon'>
                        <p className={'validator-label'}>{label}</p>
                    </div>
                </div>
                <Icon name="angle-right" color='#C3D6EC'/>
            </div>
        </div>
    )
} 

export default NoValidatorCard