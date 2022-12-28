import React from 'react';
import classNames from 'classnames';

import '../../assets/styles/uiKit/limitCard.scss'

const LimitCard = ({
        className,
        style,
        value,
        value2,
        limit = '80'
    }) => {

    const getLimitColor = (value) => {
        if(value < 60){
            return '#00B933';
        } else if(value >= 60 && value < 80){
            return '#FAA305';
        } else{
            return '#ED4242';
        }
    }

    return(
        <div className={classNames('limit__card', className)} style={style}>
            <div className='limit__card--active' style={{width: `${value}%`, backgroundColor: getLimitColor(value)}}></div>
            { value2 && 
                <div className='limit__card--double' style={{width: `${value2}%`, backgroundColor: getLimitColor(value2)}}>
                </div>
            }
            <div className='limit__card__limit' style={{left: `${limit}%`}}></div>
        </div>
    )
}

export default LimitCard;