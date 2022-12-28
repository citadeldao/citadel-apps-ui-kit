import React from "react";
import CoinCard from "./CoinCard";
import classNames from 'classnames';

import '../../assets/styles/uiKit/balanceCard.scss';

const BalanceCard = (props) => {
    const {
        data, 
        text, 
        symbol, 
        usdPrice, 
        txtColor, 
        amountColor, 
        className=''
    } = props

    const customStyle = {
        text : {
            color: txtColor
        },
        amount: {
            color: amountColor,
            fontSize: !text ? '16px' : '14px'
        }
    }

    return (
        <div className={classNames('balance-card-block', className)} style={props.style}>
            { data?.map((item, i) => (
                <div className="balance-card-container" key={i}>
                    <CoinCard
                        icon={item.network}
                        color='#FFFFFF'
                        background='#7C63F5'
                        isPersistence={item?.type === 'isPersistence'}
                        isStake={item?.type === 'isStake'}
                    />
                    <div className="balance-token-block">
                        <h2 className="balance-token-name" style={customStyle.text}>{item.symbol}</h2>
                        <div className="balance-block">
                            <p>{text && text + ':'} <span className="balance-bolder" style={customStyle.amount}>{item?.balance || 0} </span>{symbol === true && item?.code}</p>
                            {usdPrice && <p className="balance-usd-block"> $ <span>{usdPrice}</span></p>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BalanceCard