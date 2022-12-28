import React from "react";
import CoinCard from "./CoinCard";

import '../../assets/styles/uiKit/addressItem.scss';

const AddressItem = (props) => {
    const {
        data, 
        validator, 
        balance, 
        active, 
        type, 
        className=''
    } = props

    const customStyle = {
        amountTxt: {
            color: active ? '#C6D1FF' : '#292929'
        },
        token: {
            color: active ? '#FFFFFF' : '#292929'
        },
        amount: {
            color: active ? '#FFFFFF' : validator ? '#D900AB' : balance ? '#5639E0' : '#5639E0'
        }
    }

    const isPersistence = type === 'isPersistence'

    return (
        <div className={active ? 'active-address address-item' : `address-item ${className}`} onClick={props.onClick} style={props.style}>
            <div className="address-token-block">
                <CoinCard icon={data.network} color='#fff' isPersistence={isPersistence}/>
                <p className="address-token-name" style={customStyle.token}>{data.name}</p>
            </div>
            <div className="address-token-amount">
                {validator ? 
                    <p className="address-amount-txt" style={customStyle.amountTxt}>Fee: <span style={customStyle.amount}> {data.fee} </span> % </p>
                : balance ?
                    <p className="address-amount-txt" style={customStyle.amountTxt}><span style={customStyle.amount}>{data.balance}</span> {data.symbol} </p>
                : <p className="address-amount-txt" style={customStyle.amountTxt}><span style={customStyle.amount}>{data?.balance || 0}</span> {data.symbol} </p>
                }
            </div>
        </div>
    )
} 

export default AddressItem