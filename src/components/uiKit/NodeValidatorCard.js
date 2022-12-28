import React, { useState } from 'react';
import Icon from './Icon';
import CoinIcon from './CoinIcon';
import { formatAddress } from '../helpers/addressFormatter';

import '../../assets/styles/uiKit/nodeValidatorCard.scss';

const NodeValidatorCard = (props) => {
    const { 
        type, 
        network, 
        address, 
        name, 
        logo = '', 
        fee, 
        className = '', 
        status, 
        onClick = () => {} 
    } = props;

    const [showNetwork, setShowNetwork] = useState(false);

    return (
        <div className={`node-validator-card-block ${className}`}
            style={props.style}
            onClick = {onClick}>
            <div className="row">
                <div className="row">
                    <div className="validator-logo-block">
                        {!showNetwork ?
                            <img
                                src={logo}
                                onError={(e) => setShowNetwork(true)}
                                alt="logo"
                            /> :
                            <CoinIcon
                                icon={network}
                                size="small"
                                color="#fff"
                            />
                        }
                    </div>
                    <div className="row">
                        <span className="validator-name">
                            {name || formatAddress(address)}
                        </span>
                        {type === 'restake' && <h3 className="validator-fee">(Fee: <span>{fee || 5}</span> %)</h3> }
                    </div>
                </div>
                <div className="row">
                    {type === 'restake' &&
                        <div className="row">
                            <Icon name={ status ? 'checkmark-circle' : 'xmark-circle'} width={12} color={status ? '#00b933' : '#EA2929'}/>
                            <h3 className={`restake-text ${!status && 'red-text' }`}>
                                {status ? 'Restake' :'No restake'}
                            </h3>
                        </div>
                    }
                    {props.children}
                    { type === 'validator' && <h3 className="validator-fee">(Fee: <span>{fee || 5}</span> %)</h3>}
                </div>
            </div>
        </div>
    );
};

export default NodeValidatorCard;