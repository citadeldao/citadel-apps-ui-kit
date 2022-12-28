import React from 'react';
import Icon from './Icon';
import '../../assets/styles/uiKit/statusPopup.scss';
import classNames from 'classnames';

const StatusPopup = (props) => {
    const { text, type, showPopup, className = '' } = props;

    const iconsMap = {
        success: 'checkmark-circle',
        error: 'xmark-circle',
        warning: 'alarm-octagon',
        info: 'alarm-triangle'
    };

    return (
        <div
            onMouseLeave={() => {setTimeout(() => showPopup(false), 10000)}}
            className={classNames('status-popup', `status-popup--type--${type}`, className)}
            style={props.style}
        >
            <div className="status-popup__icon">
                <Icon name={iconsMap[type]}/>
            </div>
            <div className="status-popup__text">{text}</div>
            <div   
                className="status-popup__close"
                onClick={() => showPopup(false)}>
                <Icon
                    name="xmark"
                    width="12px"
                    height="12px"
                />
            </div>
        </div>
    );
};

export default StatusPopup;