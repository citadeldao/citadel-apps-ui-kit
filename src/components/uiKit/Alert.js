import React from 'react';
import classNames from 'classnames';

import Icon from './Icon';

import '../../assets/styles/uiKit/alert.scss';

const Alert = (props) => {
    const {
        title,
        text,
        textColor,
        bgColor,
        iconColor,
        hideIcon = false,
        textUnderIcon = false,
    } = props;

    const customClass = classNames(
        'alert',
        {
            'alert--hide-icon': hideIcon,
            'alert--text-under-icon': textUnderIcon,
        },
        props.className,
    );

    const textNode = <div className="alert__text" style={{ color: textColor }}>{text}</div>;

    return (
        <div className={customClass} style={{ backgroundColor: bgColor }} id={props.id}>
            <div className="alert__header">
                {!hideIcon &&
                    <div className="alert__icon" style={{ background: `${iconColor}26` }}>
                        <Icon name="alarm-octagon" color={iconColor || '#EA2929'}/>
                    </div>
                }
                <div className="alert__content">
                    {title && <div className="alert__title">{title}</div>}
                    {!textUnderIcon && textNode}
                </div>
            </div>
            {textUnderIcon && textNode}
        </div>
    );
};

export default Alert;