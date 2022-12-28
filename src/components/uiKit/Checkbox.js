import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Icon from '../uiKit/Icon';

import '../../assets/styles/uiKit/checkbox.scss';

const Checkbox = ({
    value = false,
    className,
    style,
    inverted = false,
    disabled = false,
    readonly = false,
    children,
    onChange = () => {},
}) => {
    const [val, setVal] = useState(value);

    useEffect(() => {
        setVal(value);
    }, [value]);

    const customClass = classNames(
        'checkbox',
        {
            'checkbox--selected': val,
            'checkbox--readonly': readonly,
            'checkbox--disabled': disabled,
            'checkbox--inverted': inverted,
        },
        className,
    );

    const handleChange = (e) => {
        if (readonly && disabled) {
            return;
        }

        setVal(e.target.value !== 'on');
        onChange(e.target.value !== 'on');
    };

    return (
        <label
            className={customClass}
            style={style}
        >
            <input
                type="checkbox"
                disabled={disabled}
                value={val ? 'on' : 'off'}
                onChange={handleChange}
            />
            <div className="checkbox__checkmark">
                <Icon
                    name="checkmark"
                    color="#5639E0"
                    width="16px"
                />
            </div>
            <span className="checkbox__content">{children}</span>
        </label>
    );
};

export default Checkbox;