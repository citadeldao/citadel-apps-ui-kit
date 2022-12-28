import React from 'react';

import CoinCard from './CoinCard';
import Button from './Button';

import {formatAddress} from '../helpers/addressFormatter';
import '../../assets/styles/uiKit/addressCard.scss';

const AddressCard = (props) => {
    const { 
        data, 
        logoURI, 
        className='', 
        onClick = () => {} 
    } = props

    return (
        <div
            className={`address-card-block ${className}`}
            style={props.style}
            id={props.coin && 'coin-address-card'}
            onClick={() => onClick(data)}
        >
            <div className='row'>
                <div className='row'>
                    { logoURI ? 
                        <img src={logoURI} alt='token-logo' /> :
                        <CoinCard icon={data.network} color={'#fff'} background={props.coin ? null : '#7C63F5'}/>
                    }
                    { props.coin ?
                        <div className='address-network-block'>
                            <span className='address-network'>{data.name}</span>
                            <h3 className='address-name'>{data.code}</h3>
                        </div> :
                        <div className='address-network-block'>
                            <h3 className='address-name'>{data.name}</h3>
                            <span className='card-address-format card-address-desktop-format'>{data.address}</span>
                            <span className='card-address-format card-address-mobile-format'>{formatAddress(data.address)}</span>
                        </div>
                    }
                </div>
                <div className='row'>
                    <div className='column-end'>
                        <div className='row-end'>
                            <h3 className='address-card-balance'>{data.balance}</h3>
                            <span className='address-card-net'>{data.code}</span>
                        </div>
                        <div className='row-end'>
                            {+data.usdPrice >= 0 && <span className='address-card-usd-net'>$</span>}
                            {+data.usdPrice >= 0 && <h4 className='address-card-usd-balance'>{+data?.usdPrice === 0 ? '0' : data?.usdPrice?.toFixed(2) === '0.00' ? '~0' : data?.usdPrice?.toFixed(2)}</h4>}
                        </div>
                    </div>
                    <div>{props.children}</div>
                    { props.manage && props.coin &&
                        <div className='address-card-btn'>
                            <Button textColor='#5639E0' type='small' bgColor='#C6D1FF'>Manage</Button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AddressCard