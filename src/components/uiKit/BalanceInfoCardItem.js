import React from "react";
import classNames from 'classnames';

import CoinIcon from "./CoinIcon";

const BalanceInfoCardItem = (props) => {
    const { 
        title, 
        textColor, 
        amountColor, 
        usdPrice, 
        symbol,
        className='',
        icon,
        usdSymbol
    } = props

    return (
        <div className={classNames('balance-card-item__block', className)}>
            <div className="balance-card-item">
                <div className="balance-card-item__token">
                    { icon && <CoinIcon icon={icon} size='small' /> }
                    <h2 style={{color: textColor}}> {title} </h2>
                </div>
                <div>
                    <div style={{color: amountColor}} className='balance-card-item__amount'>
                        {!symbol &&  usdSymbol && 
                            <span className="balance-card-item__usdPrice balance-usd__symbol" >$ </span>} 
                            {props.children} {symbol && <span className="balance__symbol">{symbol}</span>
                        }
                    </div>
                    { usdPrice &&
                        <p className="balance-card-item__usdPrice">$ <span>{usdPrice}</span></p>
                    }  
                </div>
            </div>
        </div>
    )
}

export default BalanceInfoCardItem