import React from 'react';
import Button from './Button';
import '../../assets/styles/uiKit/tabs.scss';

const Tab = (props) => {
    const { active, children, width, onClick, id, className } = props;
    return (
        <Button
            className={className}
            width={(width - 0.1) + '%'}
            onClick={onClick}
            id={active === id ? 'active-tab' : undefined}
        >{children}</Button>
    );
};

export default Tab;