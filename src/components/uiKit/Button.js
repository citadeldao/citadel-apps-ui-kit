import React, { useState } from 'react';
import classNames from 'classnames';
import Spinner from './Spinner';
import Icon from './Icon';
import '../../assets/styles/uiKit/button.css';

const Button = (props) => {
    const {
        type = 'default',
        id = '',
        bgColor,
        textColor,
        iconColor,
        iconBgColor,
        iconHoverColor,
        iconHoverBgColor,
        hoverBgColor,
        hoverTextColor,
        width,
        icon,
        style,
        className,
        round = false,
        disabled = false,
        loading = false,
        inverted = false,
        children,
        onClick = () => {},
    } = props;

    const customClass = classNames(
        'button',
        `button--type--${type}`,
        {
            'button--disabled': disabled,
            'button--inverted': inverted,
            'button--loading': loading,
            'button--round': round,
            'button--type--long': type === 'long-edge',
        },
        className,
    );

    const customIconClass = classNames(
        'button__icon',
        {
            'button__icon--circle': ['long', 'long-edge'].includes(type),
        },
    );

    const [_iconColor, setIconColor] = useState(iconColor);
    const [_iconBgColor, setIconBgColor] = useState(iconBgColor);
    const [_bgColor, setBgColor] = useState(bgColor);
    const [_textColor, setTextColor] = useState(textColor);

    const customStyle = {
        ...style,
        color: _textColor,
        backgroundColor: _bgColor,
        width: width,
    };

    const setHoverStyle = () => {
        !disabled && setIconColor(iconHoverColor || iconColor);
        !disabled && setIconBgColor(iconHoverBgColor || iconBgColor);
        !disabled && setBgColor(hoverBgColor || bgColor);
        !disabled && setTextColor(hoverTextColor || textColor);
    };

    const setDefaultStyle = () => {
        setIconColor(iconColor);
        setIconBgColor(iconBgColor);
        setBgColor(bgColor);
        setTextColor(textColor);
    };

    return (
        <button
            type="button"
            id={id}
            className={customClass}
            style={customStyle}
            disabled={disabled}
            onClick={(e) => !(disabled || loading) && onClick(e)}
            onMouseOver={() => setHoverStyle()}
            onMouseLeave={() => setDefaultStyle()}
        >
            {(icon && !loading) &&
                <div className={customIconClass} style={{ backgroundColor: _iconBgColor }}>
                    <Icon
                        name={icon}
                        fill={_iconColor}
                    ></Icon>
                </div>
            }
            {loading ? <Spinner/> : children}
        </button>
    );
};

export default Button;