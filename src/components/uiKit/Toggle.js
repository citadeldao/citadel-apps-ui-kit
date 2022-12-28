import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Checkbox from './Checkbox';

import '../../assets/styles/uiKit/toggle.css';

const Toggle = (props) => {
    const {
        label,
        value,
        disabled = false,
        readonly = false,
        className,
        style,
        inverted,
        onChange = () => {},
    } = props;

    const [val, setVal] = useState(value);

    useEffect(() => {
        setVal(value);
    }, [value]);

    const handleChange = (v) => {
        if (disabled && readonly) {
            return;
        }

        setVal(v);
        onChange(v);
    };

    const customClass = classNames(
        'toggle',
        {
            'toggle--disabled': disabled,
        },
        className,
    );

    return (
        <div className={customClass} style={style}>
            <Checkbox
                value={val}
                disabled={disabled}
                inverted={inverted}
                readonly={readonly}
                onChange={handleChange}
            >
                <span className="toggle__label">{label}</span>
            </Checkbox>
        </div>
    );
};

export default Toggle;