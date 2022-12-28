import React from "react";
import classNames from 'classnames';
import '../../assets/styles/uiKit/radio.scss';

const Radio = (props) => {
    const {
        children,
        value,
        onChange,
        selected,
        className = '',
        disabled,
        type = 'default',
        width,
        style
    } = props

    const customClass = classNames(
        'radio',
        `radio--type--${type}`,
        {
            'radio--selected': selected === value,
            'radio--disabled': disabled,
        },
        className,
    );

    const customStyle = {
        ...style,
        width: width
    };

    return (
        <label className={customClass} style={customStyle}>
            <input 
                type="radio" 
                value={value}
                onChange={e => onChange(e.target.value)}
                checked={selected === value}
                className="radio__input"
                disabled={disabled}
            />
            <div className="radio__content">
                {children}
            </div>
        </label>
    )
}

export default Radio;