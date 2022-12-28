import React, { useState } from 'react'
import Icon from './Icon';
import moment from "moment";
import '../../assets/styles/uiKit/infoCard.scss'

const InfoCardItem = (props) => {
    const [open,setOpen] = useState(false)
    const {text,symbol,symbol2,routes,refund,usdPrice,dropdown,children,lastTx,address} = props

    return(
        <div style={props.style}>
            { props.dateBlock ? 
            <div className='info-card-date info-card-item'>
                <p id={'bold-text'}>
                    Date
                </p>
                <p id={'bold-text'}>
                    Amount
                </p>
            </div>
            : props.noClaims ?
            <div className='no-claims'>
                <p>No claims found</p>
            </div> 
            :
            <div className='info-card-item' id={props.footer ? 'info-card-footer' : props.header ? 'info-card-header' : props.type === 'sub-header'  ? 'info-card-sub-header' : undefined}>
                <div className='row' id={props.bold ? 'bold-text' : undefined}>
                    <p>{text}</p> 
                    {dropdown && !open && <Icon name='angle-down' color='#59779A' width={12} height={12} onClick={() => setOpen(true)} className='infocard__dropdown__icon'/>}
                    {dropdown && open && <Icon name='angle-up' color='#59779A' width={12} height={12} onClick={() => setOpen(false)} className='infocard__dropdown__icon'/>}
                </div>
                {!props.footer && !props.header && props.type !== 'sub-header' && <hr className='separator'></hr>}
                {routes ? 
                <div className='routes-row'>
                    {
                        routes?.map((elem,i) => (
                            <div className='row' key={i}>
                                {elem.logoURI && <img src={elem.logoURI} alt='token-logo' style={{width: '20px'}} />}
                                <span>{elem.name}</span>
                                {i !== routes.length-1 && <Icon name={'angle-right'} width='14px' color='#A8C3E1' />}
                            </div>
                        ))
                    }
                </div>:
                <div className='row info-card-value'>
                    <h3 className='info-card-amount'>{Array.isArray(props.children) ? props.children[0] : props.children}</h3>
                    <span className='info-card-symbol'>{symbol}</span>
                    {lastTx && <a href={address?.getTxUrl(lastTx.hash)} className='tx-date-text' target='_blank' rel="noreferrer"><span>{moment(lastTx.date).from(new Date())}</span><Icon name='arrow-from-square-up-right' style={{marginLeft: '4px'}} color='#0091A6' width='16px' /></a>}
                    {refund && <span className='refund-text'>REFUND</span>}
                    {symbol2 && <span className='info-card-per'>per</span>}
                    {symbol2 && <span className='info-card-symbol'>{symbol2}</span>}
                    {usdPrice && <span className='info-card-symbol'>( 〜 <h3 className='info-card-amount info-card-usd'>{usdPrice}</h3> $)</span>}
                </div>
                }
            </div>}
            {dropdown && children && open &&
            <div className='info-card-inner'>
                {children?.map((elem, i) => (
                    <div className='info-card-item' key={i}>
                        <p>{elem?.props?.text}</p>
                        {elem?.props?.text && <hr className='separator'></hr>}
                        <div className='row'>
                            <h3 className='info-card-amount'>{elem?.props?.children}</h3>
                            <span className='info-card-symbol'>{elem?.props?.symbol}</span>
                            {elem?.props?.usdPrice && <span className='info-card-symbol'>( 〜 <h3 className='info-card-amount'>{elem.props.usdPrice}</h3> $)</span>}
                            {elem?.props?.refund && <span className='refund-text'>REFUND</span>}
                            {elem?.props?.symbol2 && <span className='info-card-per'>per</span>}
                            {elem?.props?.symbol2 && <span className='info-card-symbol'>{symbol2}</span>}
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default InfoCardItem;