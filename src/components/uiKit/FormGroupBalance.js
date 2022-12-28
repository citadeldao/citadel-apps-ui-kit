import React from 'react';
import PropTypes from 'prop-types';

import Spinner from './Spinner';
import Tooltip from './Tooltip';
import Icon from './Icon';

import '../../assets/styles/uiKit/formGroupBalance.scss';
import { prettyNumber } from '../helpers/numberFormatter';

const FormGroupBalance = ({
    usdPrice,
    balance,
    text = 'Balance',
    currency,
    placement = 'between', // start, end, around,
    type, // secret - View Balance, kepler - Change Kepler account
    loading,
    onClick = () => {},
}) => {
    const capitalizedText = `${text[0].toUpperCase()}${text.substring(1)}`;

    const customStyle = {
        justifyContent: placement === 'between' || 'around'
            ? `space-${placement}`
            : `flex-${placement}`,
    };

    const types = {
        secret: {
            text: 'View Balance',
        },
        keplr: {
            text:
                <div className="form-group-balance__kepler-block">
                    Change Keplr account
                    <div className="form-group-balance__tooltip">
                        <Tooltip
                            width="300px"
                            text="Address you have chosen in Keplr does not match the address in the app. Please choose the right account and try again."
                        >
                            <Icon name="info-circle" color="#92B2D6"/>
                        </Tooltip>
                    </div>
                </div>,
        },
        loading: {
            text: <Spinner/>,
        },
    };

    const hasBalance = (value) => ![null, undefined, ''].includes(value);

    return (
        <div className="form-group-balance" style={customStyle}>
            {hasBalance(usdPrice) &&
                <div className="form-group-balance__block">
                    {<Tooltip text={`${usdPrice || 0} $`}>{prettyNumber(usdPrice)}</Tooltip>} <span className="form-group-balance__currency">$</span>
                </div>
            }

            {loading
                ? <Spinner/>
                : <>
                    {(!!balance && !type) &&
                        <div className="form-group-balance__block">
                            <span className="form-group-balance__text">{capitalizedText}:</span>
                            <Tooltip text={`${balance} ${currency}`}>{prettyNumber(balance)}</Tooltip>
                            <span className="form-group-balance__currency">{currency}</span>
                        </div>
                    }
                    {!!type &&
                        <div className="form-group-balance__block" onClick={() => onClick()}>
                            {!hasBalance(balance)
                                ? <div className={`form-group-balance__${type}`}>
                                    {types[type]?.text}
                                </div>
                                : <div>
                                    <span className="form-group-balance__text">{capitalizedText}:</span>
                                    <Tooltip text={`${balance} ${currency}`}>{prettyNumber(balance)}</Tooltip>
                                    <span className="form-group-balance__currency">{currency}</span>
                                </div>
                            }
                        </div>
                    }
                </>
            }
        </div>
    );
};

FormGroupBalance.propTypes = {
    usdPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
    currency: PropTypes.string,
    loading: PropTypes.bool,
    placement: PropTypes.oneOf(['start', 'end', 'between', 'around']),
    type: PropTypes.oneOf(['secret', 'keplr']),
};

export default FormGroupBalance;