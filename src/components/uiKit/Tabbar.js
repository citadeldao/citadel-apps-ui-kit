import React, { useState } from 'react';
import '../../assets/styles/uiKit/tabbar.scss';
import TabbarItem from './TabbarItem';
import { useLocation, useNavigate } from 'react-router-dom';

const Tabbar = (props) => {
    const { config, className = '', bottomInset, onChangePanel } = props;
    const location = useLocation();
    const [activePanel, setActivePanel] = useState(location.pathname);
    const navigate = useNavigate();

    const changePanel = (route) => {
        setActivePanel(route);
        navigate(route + '?' + window.location.search.slice(1));
    };

    const customStyle = {
        background: config.tabbarParamsFromConfig('BACKGROUND_COLOR'),
        paddingBottom: bottomInset,
        ...props.style,
    };

    return (
        <div
            className={`tabbar ${className}`}
            style={customStyle}
        >
            {config.tabbarParamsFromConfig('TABBAR_ITEMS').map(item => (
                <TabbarItem
                    itemsCount={config.tabbarParamsFromConfig('TABBAR_ITEMS').length}
                    activePanel={activePanel}
                    changePanel={route => onChangePanel ? onChangePanel(route) : changePanel(route)}
                    key={item.TITLE}
                    icon={item.ICON}
                    title={item.TITLE}
                    routes={item.ROUTES}
                    config={config}
                />
            ))}
        </div>
    );
};

export default Tabbar;