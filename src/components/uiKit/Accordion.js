import React, { useState } from 'react';
import Icon from './Icon';
import classNames from 'classnames';
import '../../assets/styles/uiKit/accordion.scss';

const Accordion = (props) => {
    const {
        type = 'default',
        title,
        className,
        children,
    } = props;
    const [open, setOpen] = useState(false);

    const customClass = classNames(
        'accordion',
        `accordion--type--${type}`,
        {
            'accordion--active': open
        },
        className,
    );

    const types = {
        guide: {
            icon: 'questionmark-circle',
        },
    };

    return (
        <div className={customClass}>
            <div className="accordion__header" onClick={() => setOpen(!open)}>
                <div
                    className="accordion__title"
                >
                    {types[type]?.icon &&
                        <Icon name={types[type]?.icon}/>
                    }
                    {title}
                </div>
                <Icon name={`angle-${open ? 'up' : 'down'}`} width="16px"/>
            </div>
            {open &&
                <div className="accordion__content">
                    {children}
                </div>
            }
        </div>
    );
};

export default Accordion;