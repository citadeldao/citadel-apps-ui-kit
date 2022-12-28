import React from 'react';
import CoinCard from "./CoinCard";
import Icon from './Icon';
import Button from "./Button";

import '../../assets/styles/uiKit/poolCard.scss'

const PoolCardItem = (props) => {
    const {
        data, 
        leftText, 
        claim, 
        rightText, 
        nativeAmountColor, 
        externalAssetColor, 
        removeBtn, 
        bottomBgColor, 
        deadline, 
        text, 
        day, 
        className = ''
    } = props

    return (
        <div className={removeBtn ? 'pool-card-token baseline' : `pool-card-token ${className}`} style={props.style}>
            <div className='pool-mobile-row-claim'>
                {claim && <Button textColor='#5639E0' type='small' bgColor='#C6D1FF'>{claim}</Button> }
            </div>
            <div className='pool-mobile-row'>
                { removeBtn && <Icon name='xmark-circle' /> }
            </div>
            <div className="pool-card-token-row">
                <p className="pool-card-token-title pool-card-mobile-title">{leftText || ''}</p>
                <div className="pool-card-token-left-content">
                    <CoinCard icon={data?.externalAsset?.net} color='#fff' background={bottomBgColor}/>
                    <div className="pool-card-token-left-block">
                        <p className="pool-card-token-block-amount" style={{color: externalAssetColor}}>{data?.externalAsset?.amount} <span>{data?.externalAsset?.symbol}</span></p>
                        <p className="pool-card-token-block-usd"> <span> $ </span>{data?.externalAsset?.usdPrice}</p>
                    </div>
                </div>
            </div>
            <div className="pool-card-token-row">
                <p className="pool-card-token-title pool-card-mobile-title">{rightText || ''}</p>
                <div className="pool-card-token-left-content">
                    <CoinCard icon={data?.nativeAsset?.net} color='#fff' background={bottomBgColor}/>
                    <div className="pool-card-token-left-block">
                        <p  className="pool-card-token-block-amount" style={{color: nativeAmountColor}}>{data?.nativeAsset?.amount} <span>{data?.nativeAsset?.symbol}</span></p>
                        <p className="pool-card-token-block-usd"><span> $ </span> {data?.nativeAsset?.usdPrice}</p>
                    </div>
                </div>
            </div>
            <div className="pool-card-token-row pool-card-third-column">
                { deadline ? 
                    <div>
                        <p className="pool-card-token-title-bold">{text}</p>
                        <p className='pool-deadline'>{deadline}</p>
                        <p className='pool-dealine-days'>{day} <span> days</span></p>
                    </div> 
                : ''
                }
            </div>
            { deadline ? 
                <div className='pool-card-token-row pool-card-mobile-column'>
                    <p className="pool-card-token-title-bold">{text}</p>
                    <div>
                        <p className='pool-deadline'>{deadline}</p>
                        <p className='pool-dealine-days'>{day} <span> DAYS</span></p>
                    </div>
                </div> 
            : ''}
        </div>
    )
}

export default PoolCardItem