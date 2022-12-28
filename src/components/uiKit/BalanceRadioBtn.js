import React from "react";
import '../../assets/styles/uiKit/balanceRadioBtn.css'

const BalanceRadioBtn = (props) => {
    const {disabled, id, textColor, bgColor, title, value, onChange, isSelected, symbol, prev, className = ''} = props

    const customStyle = {
        ...props.style,
        text: {
            color:  isSelected ? '#292929' : disabled ? '#B0B0B0' : textColor
        },
        block: {
            backgroundColor: isSelected ? '#F1EEFF' : disabled ? '#F4F4F4' : bgColor,
            borderColor: isSelected ? '#7C63F5' : disabled ? '#E2E2E2' : '#C3D6EC'
        },
        symbol: {
            color: isSelected ? '#5639E0' :  disabled ? '#B0B0B0' : '#00B2FE'
        },
        usdSymbol : {
            color: disabled ? '#B0B0B0' : '#292929'
        }
    };

    return (
        <label htmlFor={id} className={`balance-radio ${className}`} style={customStyle.block}>
            <input type="radio" id={id} value={value} onChange={e => onChange(e.target.value)} checked={isSelected} disabled={disabled}/>
            <div className="radio-content">
                <span style={customStyle.text}>{title}</span>
                <p className="usd-symbol" style={customStyle.usdSymbol}> {prev && symbol} <span style={customStyle.symbol}>{value}</span> {!prev && symbol}</p>
            </div>
        </label>
    )
}

export default BalanceRadioBtn