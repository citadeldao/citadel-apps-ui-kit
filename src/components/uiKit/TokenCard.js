import React from 'react';
import classNames from 'classnames';

import CoinCard from './CoinCard';
import Button from './Button';

import '../../assets/styles/uiKit/tokenCard.scss';

const TokenCard = (props) => {
    const {
        usdPrice, 
        fee, 
        poolAssets, 
        network, 
        action, 
        className = ''
    } = props

    return (
        <div className={classNames('token-card-container', className)} style={props.style}>
            <div className="token-card-block">
                <CoinCard icon={network} color='#fff' />
                <div className="token-card__pool">
                    <p className="token-card__pool-label">   
                    {poolAssets.map((token,i) => (
                        <span key={i}>
                            {token.symbol?.toUpperCase()} 
                            {poolAssets.length - 1 !== i && <span className="pool-symbol"> / </span>}
                        </span>
                    ))}</p>
                    <p className="token-card__usdPrice">$ {usdPrice} <span>-{fee}%</span></p>
                </div>
            </div>
            <Button type='small' textColor='#5639E0' bgColor='#C6D1FF'>{action}</Button>
        </div>
    )
}

export default TokenCard