import React from 'react';
import classNames from 'classnames';

import '../../assets/styles/uiKit/card.scss';

const Card = (props) => {
    const {
        background = '#F4F6FF',
        noShadow = false,
        className,
        style,
        onClick = () => {},
    } = props;

    return (
        <div
            className={classNames('card', className)}
            style={{
                background,
                boxShadow: noShadow ? 'none': null,
                ...style,
            }}
            onClick={onClick}
        >
            {props.children}
        </div>
    );
};

export default Card;