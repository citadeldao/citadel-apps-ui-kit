import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Sprite from '../../assets/icons-sprite.svg';
import iconList from '../../assets/icons.json';

const Icon = ({
    name,
    width,
    height,
    color,
    onLoad = () => {},
    onError = () => {},
    ...otherProps
}) => {
    useEffect(() => {
        if (!iconList.includes(name)) {
            console.warn(`Icon with name "${name}" not found!`);
        }
    }, [name]);

    const getSize = () => {
        let h = parseInt(height);
        let w = parseInt(width);

        if (!h && !w) {
            return { h: 24, w: 24 }
        }

        if (h && !w) {
            return { h, w: h }
        }

        if (!h && w) {
            return { h: w, w }
        }

        return { h, w}
    };

    return (
        <svg
            width={getSize().w}
            height={getSize().h}
            fill={color}
            style={{ display: 'flex', flexShrink: 0 }}
            {...otherProps}
        >
            <use href={`${Sprite}#${name}`}/>
        </svg>
    );
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
};

export default Icon;