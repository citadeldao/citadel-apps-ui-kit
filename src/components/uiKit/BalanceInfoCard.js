import React from 'react';
import classNames from 'classnames';

import '../../assets/styles/uiKit/balanceInfoCard.scss';

const BalanceInfoCard = (props) => {
    const {
        children, 
        className=''
    } = props

    return (
        <div className={classNames('balance-infocard__block', className)} style={props.style}>
            {children}
        </div>
    )
}

export default BalanceInfoCard