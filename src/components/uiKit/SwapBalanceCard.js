import React from 'react';
import classNames from 'classnames';

import CoinCard from './CoinCard'

import '../../assets/styles/uiKit/swapConfirmCard.scss'

const SwapBalanceCard = (props) => {
    const {
        token, 
        amount,
        bgColor, 
        color, 
        width, 
        icon,
        className = ''
    } = props

    const customStyle = {
        amount: {
            color: color
        },
        block: {
            backgroundColor: bgColor,
            width: width || 'auto'
        }
    };

    return (
        <div className={classNames('swap-confirm-block', className)} style={customStyle.block}>
            <CoinCard icon={icon} color={'#fff'} background={color} />
            <div className="swap-confirm-block__right">
                <span className='swap-confirm-block__name'>{token.name}</span>
                <h3 className='swap-confirm-block__balance' style={customStyle.amount}>
                    {amount} 
                    <span> 
                        {token.code}
                    </span>
                </h3>
            </div>
        </div>
    )
}

export default SwapBalanceCard