import React from 'react';
import classNames from 'classnames';

import CoinIcon from './CoinIcon';

import '../../assets/styles/uiKit/coin-card.scss';

const CoinCard = (props) => {
    const {
        background = '#7C63F5',
        color = '#fff',
    } = props;

    const customStyle = {
        background,
        ...props.style,
    };

    return (
        <div className={classNames('coin-card', props.className)} style={customStyle}>
            <CoinIcon color={color} {...props} />
        </div>
    );
};

export default CoinCard;