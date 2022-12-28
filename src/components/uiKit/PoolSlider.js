import React from "react";
import { floor } from 'lodash';

import '../../assets/styles/uiKit/poolSlider.css';

const PoolSlider = (props) => {
    const { 
        name, 
        value, 
        onChange, 
        onInputChange, 
        rangeFrom, 
        rangeTo, 
        className = ''
    } = props

    const getBackgroundSize = () => {
        return { backgroundSize: `${(value * 100) / 100}% 100%` };
    };

    return ( 
        <div className={`pool-slider-block ${className}`}>
            <div className="pool-slider">
                <p className="pool-slider--text">{name}</p>
                <div className="pool-slider--input">
                    <input className='liquidity-input'
                        type="number"
                        max="100"
                        min="0"
                        value={floor(Number(value)).toString()}
                        onChange={(e) => onInputChange(e)}
                    />
                    <span>%</span> 
                </div>
            </div>
            <div className="pool-slider--range" >
                <input className='slider slider-progress'
                    min='0'
                    max='100'
                    step='1'
                    value={Number(value)}
                    onChange={(e) => onChange(e.target.value)}
                    type='range'
                    style={getBackgroundSize()}
                />
                <div className='remove-liquidity-row'>
                    <p className='liquidity-range'>{rangeFrom} <span>%</span></p>
                    <p className='liquidity-range'>{rangeTo} <span>%</span></p>
                </div>
            </div>
        </div>
    )
}

export default PoolSlider