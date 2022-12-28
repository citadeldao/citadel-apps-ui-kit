import React from 'react';
import CoinCard from './CoinCard';
import CoinIcon from './CoinIcon';
import PoolItemInfo from './PoolItemInfo';
import Icon from './Icon';

import classNames from 'classnames';

import '../../assets/styles/uiKit/poolItem.scss'

const PoolItem = (props) => {
    const {
        id, 
        apr, 
        name, 
        network, 
        isSuperfluidPool, 
        superFluidAPR, 
        poolInfo, 
        hideIcon, 
        double, 
        onClick, 
        children, 
        className = ''
    } = props

    const elements = children?.length > 0 && 
        children.filter(elem => typeof elem === 'object' && elem.hasOwnProperty('props'));

    return (
        <div className={classNames('pool-item-card', className)} style={props.style} onClick={onClick}>
            <div className="pool-item-token">
                <div className="pool-item-token-content">
                    <CoinCard icon={network}  color='#fff' background="#7C63F5"/>
                    {double && <div className="double-icon">
                        <CoinCard icon={network}  color='#fff' size='big' background='#7C63F5'/>
                        </div>
                    }
                    <div className="pool-item-token-pool">
                        <p className="pool-token-name">
                            {name}
                            </p>
                        {id && <p className="pool-name">Pool #{id}</p>}
                    </div>
                </div>
                <div className="pool-item-fee">
                    <div>APR: 
                        <span className="apr-amount"> {(apr * 100).toFixed(2) || 0} </span> %  {!hideIcon && <CoinIcon icon={network} size='small'/>}
                        { isSuperfluidPool && 
                            <div className="super-fluid-apr-block">
                                <Icon name='plus' color="#869FFF" width='10px'/>
                                <span className="apr-amount">{superFluidAPR}</span> % 
                                <CoinIcon icon={network} size='small' color='#ff5722'/>
                            </div>
                        }
                    </div>
                </div>
            </div>
            { poolInfo && 
                <div className="pool-item-info">
                    {elements.length ?
                        elements?.map((item, i) => (
                        <PoolItemInfo text={item.props.text} amount={item.props.amount} symbol={item.props.symbol} textColor={item.props.textColor} symbolColor={item.props.symbolColor} key={i}/>
                    )) :
                    <PoolItemInfo text={children.props.text} amount={children.props.amount} symbol={children.props.symbol} textColor={children.props.textColor} symbolColor={children.props.symbolColor}/>
                }
                </div>
            }
        </div>
    )
}

export default PoolItem