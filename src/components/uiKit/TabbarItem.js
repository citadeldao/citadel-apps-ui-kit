import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Icon from './Icon';

import '../../assets/styles/uiKit/tabbar.scss';

const TabbarItem = (props) => {
    const { activePanel, config, itemsCount, className = '' } = props;
    const [itemColor, setItemColor] = useState(config.tabbarParamsFromConfig('DEFAULT_ITEM_COLOR'));

    useEffect(() => {
        if (activePanel === props.routes) {
            setItemColor(config.tabbarParamsFromConfig('ACTIVE_ITEM_COLOR'));
        } else {
            setItemColor(config.tabbarParamsFromConfig('DEFAULT_ITEM_COLOR'));
        }
        // eslint-disable-next-line
    }, [activePanel]);

    const setHoverColor = () => {
        setItemColor(config.tabbarParamsFromConfig('HOVER_ITEM_COLOR'));
    };
    const setDefaultColor = () => {
        if (activePanel !== props.routes) {
            setItemColor(config.tabbarParamsFromConfig('DEFAULT_ITEM_COLOR'));
        } else {
            setItemColor(config.tabbarParamsFromConfig('ACTIVE_ITEM_COLOR'));
        }
    };
    const getWidth = () => {
        if (itemsCount >= 2 && itemsCount <= 5) {
            return '19%';
        } else if (itemsCount > 5) {
            return (100 / itemsCount) + '%';
        }
        return '40%';
    };

    const customStyle = {
        text: {
            color: itemColor,
        },
        block: {
            width: getWidth(),
        },
    };

    return (
        <div
            style={customStyle.block}
            className={classNames('tabbar-item', className)}
            onClick={() => props.changePanel(props.routes)}
            onMouseOver={() => setHoverColor()}
            onMouseLeave={() => setDefaultColor()}
        >
            <div className="tabbar-item__icon">
                <Icon
                    name={props.icon?.toLowerCase()}
                    color={itemColor || '#5639E0'}
                ></Icon>
            </div>
            <p className={'tabbar-item__text'} style={customStyle.text}>
                {props.title}
            </p>
        </div>
    );
};

export default TabbarItem;