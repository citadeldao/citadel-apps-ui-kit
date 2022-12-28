import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from './Icon';

import '../../assets/styles/uiKit/icon-button.css';

const IconButton = ({
    type = 'common', // common, round, hexagon, square
    width = 24,
    height = 24,
    icon,
    iconColor = '#000',
    iconHoverColor = iconColor,
    bgColor = 'transparent',
    bgHoverColor = bgColor,
    borderColor= bgColor,
    borderHoverColor = borderColor,
    className,
    disabled = false,
    onClick = () => {},
}) => {
    const isHexagon = type === 'hexagon';

    const customClass = classNames('icon-button', `icon-button--type--${type}`, className);
    const [customStyle, setCustomStyle] = useState({
        button: {
            backgroundColor: isHexagon ? borderColor : bgColor,
            borderWidth: isHexagon ? 1 : 0,
            borderStyle: 'solid',
            borderColor: isHexagon ? bgColor : borderColor,
            width: Number(width),
            height: Number(height),
        },
        icon: {
            fill: iconColor,
        },
        pseudo: {
            backgroundColor: bgColor,
        }
    });

    const handleHover = () => {
        setCustomStyle({
            ...customStyle,
            button: {
                ...customStyle.button,
                backgroundColor: isHexagon ? borderHoverColor : bgHoverColor,
                borderColor: borderHoverColor,
            },
            icon: {
                ...customStyle.icon,
                fill: iconHoverColor,
            },
            pseudo: {
                backgroundColor: bgHoverColor,
            }
        });
    };

    const handleBlur = () => {
        setCustomStyle({
            ...customStyle,
            button: {
                ...customStyle.button,
                backgroundColor: isHexagon ? borderColor : bgColor,
                borderColor: isHexagon ? bgColor : borderColor,
            },
            icon: {
                ...customStyle.icon,
                fill: iconColor,
            },
            pseudo: {
                backgroundColor: bgColor,
            }
        });
    };

    return (
        <button
            className={customClass}
            style={customStyle.button}
            onMouseOver={handleHover}
            onMouseLeave={handleBlur}
            onClick={onClick}
            disabled={disabled}
        >
            {/* pseudo placeholder */}
            {type === 'hexagon' && <div
                className={`icon-button--type--${type}__before`}
                style={customStyle.pseudo}
            ></div>}
            <Icon
                name={icon}
                color={customStyle.icon.fill}
                width={width}
                height={height}
            />
        </button>
    );
};

export default IconButton;