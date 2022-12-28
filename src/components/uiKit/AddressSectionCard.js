import React from 'react';
import classNames from 'classnames';

import { formatAddress } from '../helpers/addressFormatter';
import { capitalizeToken } from '../helpers/tokenFormatter';
import { copyToClipboard } from '../helpers/copyToClipboard';

import Icon from './Icon';
import CoinCard from './CoinCard';

import '../../assets/styles/uiKit/addressSectionCard.scss';

const AddressSectionCard = (props) => {
    const {
        data,
        disabled = false,
        copy = false,
        logoURI,
        className,
        onClick = () => {},
    } = props;

    const customClass = classNames(
        'address-section-card',
        {
            'address-section-card--disabled': disabled,
        },
        className,
    );

    return (
        <>
            {data ?
                <div
                    className={customClass}
                    onClick={() => !copy && onClick()}
                    style={props.style}
                >
                    <div className="address-section-card__token">
                        <div className="address-section-card__logo">
                            {logoURI
                                ? <img src={logoURI} alt="address-section-card__token-logo"/>
                                : <CoinCard icon={data.network}/>
                            }
                        </div>

                        <div className="address-section-card__token-info">
                            <div className="address-section-card__token-name">
                                {capitalizeToken(data.name)}
                                <span>({formatAddress(data.address)})</span>
                                {copy &&
                                    <Icon
                                        width="20"
                                        name="copy"
                                        onClick={copyToClipboard(data.address)}
                                    />
                                }
                            </div>
                            <div className="address-section-card__token-balance">
                                {data.balance}
                                <span>{data.code}</span>
                            </div>
                        </div>
                    </div>
                    <div className="address-section-card__arrow">
                        <Icon
                            width="20"
                            name="angle-right-thin"
                        />
                    </div>
                </div>
                : null
            }
        </>
    );
};

export default AddressSectionCard;