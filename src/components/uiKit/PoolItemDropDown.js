import React, { useState } from "react"
import CoinCard from "./CoinCard"
import PoolItemInfo from './PoolItemInfo'
import Icon from './Icon';

import '../../assets/styles/uiKit/poolItemDropdown.scss';


const PoolItemDropDown = (props) => {
    const {
        data, 
        double, 
        apr, 
        dropdown, 
        className = ''
    } = props
    
    const [open, setOpen] = useState(false)

    return (
        <div className={`pool-item-dropdown-card ${className}`} onClick={() => setOpen(!open)} style={props.style}>
            <div className={dropdown && open ? "pool-item-dropwdown-token padding-bottom" : "pool-item-dropwdown-token"}>
                <div className="pool-item-token-content">
                    <CoinCard icon={data?.nativeAsset?.net} color='#fff'/>
                    {double && <div className="double-icon">
                        <CoinCard icon={data?.externalAsset?.net}  color='#fff' size='big' bgColor='#7C63F5'/>
                        </div>}
                    <div className="pool-item-token-pool">
                        <p className="pool-token-name">{data?.nativeAsset?.symbol} / {data?.externalAsset?.symbol}</p>
                        <p className="pool-name">TVL: <span className="blue-txt">{data?.tvl}</span> $ </p>
                    </div>
                </div>
                <div className="pool-item-fee">
                    {apr ? <p>APR: <span className="apr-amount"> {data.apr} </span> % </p> :
                    dropdown ? 
                    <Icon name='angle-down' width={12} color="#A8C3E1"/>
                    : ''
                }
                </div>
            </div>
            { dropdown && open &&
                <div className="pool-item-info">
                    <PoolItemInfo text='Pooled SIENNA:' amount={data?.liquidity_provider?.liquidity_provider_amount} symbol='%' textColor='#D900AB' symbolColor='#3C5B7E'/>
                    <PoolItemInfo text='Pooled ETH:' amount={data?.liquidity_provider?.pool_liquidity} symbol='$' textColor='#5639E0' symbolColor='#292929'/>
                    <PoolItemInfo text='Share of Pool:' amount={data?.liquidity_provider?.my_liquidity} symbol='$' textColor='#0F8932' symbolColor='#292929'/>
                </div>
            }
        </div>
    )
}

export default PoolItemDropDown