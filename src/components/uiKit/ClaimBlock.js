import React from "react"
import CoinCard from "./CoinCard"
import Button from "./Button"
import PoolItemInfo from "./PoolItemInfo"

import '../../assets/styles/uiKit/claimBlock.scss'

const ClaimBlock = (props) => {
    const {
        data, 
        children, 
        onClick, 
        textColor, 
        bgColor, 
        disabled, 
        rewards, 
        type, 
        className = ''
    } = props

    const elements = children?.length && children
    .filter(elem => typeof elem === 'object' && elem.hasOwnProperty('props'));

    const isPersistence = type === 'isPersistence'
    const isStake = type === 'isStake'

    return (
        <div className={`claim-item-card ${className}`} style={props.style}>
            <div className="pool-item-token">
                <div className="pool-item-token-content">
                    <CoinCard icon={data?.network} color='#fff' background='#7C63F5' isPersistence={isPersistence} isStake={isStake}/>
                    <div className="pool-item-token-pool">
                        <p className="pool-token-name">{data?.name}</p>
                    </div>
                </div>
                <div className="claim-item-block">
                    <p className="claim-item-balance">{rewards} <span className="claim-item-symbol">{data?.symbol}</span></p>
                    <Button onClick={onClick} textColor={textColor} bgColor={bgColor} disabled={disabled} type='small'>Claim now!</Button>
                </div>
            </div>
            <div className="pool-item-info">
                { elements?.length ? 
                    elements.map((item, i) => (
                        <PoolItemInfo text={item.props.text} amount={item.props.amount} symbol={item.props.symbol} textColor={item.props.textColor} symbolColor={item.props.symbolColor} key={i}/>
                    )):
                    <PoolItemInfo text={children.props.text} amount={children.props.amount} symbol={children.props.symbol} textColor={children.props.textColor} symbolColor={children.props.symbolColor}/>
                }
            </div>
        </div>
    )
} 

export default ClaimBlock