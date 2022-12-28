import React from 'react';
import '../../assets/styles/uiKit/radioButton.css';

const RadioButton = (props) => {
    const {
        disabled,
        id,
        textColor,
        bgColor,
        label,
        value,
        onChange,
        isSelected,
        long,
        className = ''
    } = props;

    const customStyle = {
        ...props.style,
        text: {
            color: isSelected ? '#292929' : disabled ? '#B0B0B0' : textColor,
            marginLeft: '15px',
        },
        block: {
            backgroundColor: isSelected ?
                '#F1EEFF' :
                disabled ? '#F4F4F4' : bgColor,
            borderColor: isSelected ?
                '#7C63F5' :
                disabled ? '#E2E2E2' : '#C3D6EC',
        },
    };

    return (
        <label htmlFor={id}
               className={long ? 'long-radio balance-radio' : `balance-radio ${className}`}
               style={customStyle.block}>
            <input type="radio" id={id} value={value}
                   onChange={e => onChange(e.target.value)} checked={isSelected}
                   disabled={disabled}/>
            <span style={customStyle.text}>{label}</span>
        </label>
    );
};

export default RadioButton;