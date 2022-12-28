import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import classNames from 'classnames';

import '../../assets/styles/uiKit/inlineCheckbox.scss';

const InlineCheckBox = ({
    value = false,
    disabled,
    readonly,
    style,
    className,
    children,
    onChange = () => {},
}) => {
    const [val, setVal] = useState(value);

    useEffect(() => {
        setVal(value);
    }, [value]);

    const customClass = classNames(
        'checkbox-inline',
        {
            'checkbox-inline--selected': val,
            'checkbox-inline--disabled': disabled,
        },
        className,
    );

    const handleChange = () => {
        setVal(!val);
        onChange(!val);
    };

    return (
        <div
            className={customClass}
            style={style}
            onClick={!disabled && !readonly && handleChange}
        >
            <div className="checkbox-inline__content">
                {children}
            </div>
            <Checkbox
                value={val}
                readonly
                className='checkbox-inline__checkmark'
                disabled={disabled}
            />
        </div>
    );
};

export default InlineCheckBox;