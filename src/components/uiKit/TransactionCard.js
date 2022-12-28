import moment from 'moment';
import classNames from 'classnames';
import React from 'react';
import Icon from '../uiKit/Icon';
import '../../assets/styles/uiKit/transaction-item.scss';
import { prettyNumber, formatNumber } from '../helpers/numberFormatter';
import { formatAddress } from '../helpers/addressFormatter';

const TransactionCard = (props) => {
    const { amount, status, icon = '', title = '', fee = '', date = '', className, style,  onClick = () => {}} = props;
    return (
        <div
            className={classNames(
                'transaction-item',
                className,
                `transaction-item--status--${status ? 'fail' : 'success'}`,
            )}
            style={style}
            onClick={onClick}
        >
            <div className="transaction-item__left">
                <div className="transaction-item__icon">
                    <img src={icon} alt='icon'/>
                </div>
                <div className="transaction-item__content">
                    <div className="transaction-item__title">
                        {title}
                        <span className="transaction-item__status-icon">
                            <Icon
                                name={`${status ? 'xmark' : 'checkmark'}-circle`}
                                color={status ? '#CC3030' : '#0F8932'}
                            />
                        </span>
                    </div>
                    <span className="transaction-item__time">{moment(date).from(new Date())}</span>
                </div>
            </div>
            <div className="transaction-item__right">
                <div className={`transaction-item__amount transaction-item__amount--${status ? 'fail' : 'success'}`}>
                {formatNumber(amount?.text)} <span>{formatAddress(amount?.symbol)}</span>
                </div>
                <div className="transaction-item__fee">Fee: <span>{prettyNumber(fee.text)}</span> {formatAddress(fee.symbol)}</div>
            </div>
        </div>
    );
};


export default TransactionCard;