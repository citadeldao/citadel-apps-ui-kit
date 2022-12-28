import React from 'react';
import '../../assets/styles/uiKit/coin-icon.css';

import Icon from './Icon';
import classNames from 'classnames';

const CoinIcon = (props) => {
    const {
        icon,
        color = '#5639E0',
        labelColor = '#5639E0',
        isPersistence = false,
        isStake = false,
        width,
        height,
        size,
        className,
    } = props;

    const {} = props;
    const getWidth = () => {
        switch (size) {
            case 'big':
                return '32px';
            case 'medium':
                return '26px';
            case 'small':
                return '20px';
            default:
                return width || '32px';
        }
    };
    const getHeight = () => {
        switch (size) {
            case 'big':
                return '32px';
            case 'medium':
                return '26px';
            case 'small':
                return '20px';
            default:
                return height || '32px';
        }
    };

    const getLabelType = () => {
        if (isPersistence) {
            return 'persistence';
        } else if (isStake) {
            return 'stake';
        }
    };

    return (
        <div className={classNames('coin-icon', className)} style={props.style} id={props.id}>
            <Icon
                className="coin-icon__icon"
                name={`coin--${icon?.toLowerCase()}`}
                width={getWidth()}
                height={getHeight()}
                color={color}
            />
            {(isPersistence || isStake) && (
                <div className="coin-icon__label">
                    <Icon
                        className="coin-icon__label"
                        name={`coin--${getLabelType()}-label`}
                        color={labelColor}
                    />
                </div>
            )}
        </div>
    );
};

export default CoinIcon;