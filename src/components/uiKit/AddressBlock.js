import React from "react";
import CoinCard from "./CoinCard";
import {capitalizeToken} from '../helpers/tokenFormatter';
import {formatAddress} from '../helpers/addressFormatter';

import '../../assets/styles/uiKit/addressBlock.scss';

const AddressBlock = (props) => {
    const {
        data, 
        usdPrice, 
        active, 
        logoURI, 
        className=''
    } = props

    const customStyle = {
        address: {
            color: active ? '#C6D1FF' : '#6B93C0'
        },
        token: {
            color: active ? '#FFFFFF' : '#292929'
        },
        amount: {
            color: active ? '#FFFFFF' : '#5639E0'
        },
        usd: {
            color: active ? '#FFFFFF' : '#0095D6'
        },
        symbol: {
            color: active ? '#C6D1FF' : '#292929'
        }
    };

    return (
        <div className={ active ? `active-address address-block` : `address-block ${className}`} onClick={props.onClick} style={props.style}>
            <div className="address-block-token">
                { logoURI ? 
                    <img src={ logoURI } alt='token-logo' /> :
                    <CoinCard icon={data.network} color='#fff'/>
                }
                <div className="address-tokens-block">
                    <p className="address-token-name" style={customStyle.token}>{capitalizeToken(data.name)}</p>
                    <p className="address-token-address" style={customStyle.address}>{formatAddress(data?.address)}</p>
                </div>
            </div>
            <div className="address-block-amount">
                <p className="address-block-balance" style={customStyle.amount}>{data.balance} <span className="amount-symbol" style={customStyle.symbol}>{data.code}</span></p>
                {usdPrice && <p className="address-block-usd" style={customStyle.usd}><span className="amount-symbol" style={customStyle.symbol}> $ </span> {usdPrice}</p>}
            </div>
        </div>
    )
}

export default AddressBlock