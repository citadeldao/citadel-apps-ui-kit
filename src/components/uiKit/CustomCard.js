import React from 'react';
import CoinCard from './CoinCard';
import Toggle from './Toggle';
import {formatAddress} from '../helpers/addressFormatter';

import '../../assets/styles/uiKit/customCard.scss';

const CustomCard = (props) => {
    const { 
        data, 
        textLeft, 
        textRight, 
        className = ''
    } = props

    return (
        <div className={`custom-card-block custom-card-toggle-block ${className}`} style={props.style}>
            <div className='row card-inner-padding'>
                <div className='row'>
                    <CoinCard icon={data.network} color='#fff'/>
                    <div>
                        <h3 className='card-address-name'>{data.name}</h3>
                        <span className='card-address address-desktop-format'>{data.address}</span>
                        <span className='card-address address-mobile-format'>{formatAddress(data.address)}</span>

                    </div>
                </div>
                <div>
                    <Toggle text='Autostake' textColor='#59779A'/>
                </div>
            </div>
            <div className='delimeter'></div>
            <div className='card-inner-padding' onClick={props.onClick}>
                <div className='row'>
                    <p>{textLeft}</p>
                    {data.restakeAmount && <p>{textRight}</p>}
                </div>
                <div className='row'>
                    <div className='baseline'>
                        <h3 className='card-balance'>{data.balance}</h3>
                        <span className='card-net'>{data.code}</span>
                        {data.usdPrice && <span className='card-usd-net'>$</span>}
                        {data.usdPrice && <h4 className='card-usd-balance'>{data.balance * data.usdPrice}</h4>}
                    </div>
                    {data.restakeAmount && <div className='row-end'>
                        <h3 className='card-balance-2'>{data.restakeAmount}</h3>
                        <span className='card-net'>{data.code}</span>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default CustomCard