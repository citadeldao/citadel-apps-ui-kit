import React from 'react';
import Icon from './Icon';

import '../../assets/styles/uiKit/tipCard.scss';

const TipCard = (props) => {
    const { 
        text, 
        className = '' 
    } = props
    
    return (
        <div className={`tip-card-block ${className}`} style={props.style}>
            <div>
                <Icon name='lightbulb-on' width="28" color='#FAA305'/>
            </div>
            <div>
                <h4>Tip</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default TipCard