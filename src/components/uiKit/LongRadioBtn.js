import React from "react";
import '../../assets/styles/uiKit/longRadioBtn.css'

const LongRadioBtn = (props) => {
    const {disabled, id, textColor, bgColor, title, value, onChange, isSelected, className = ''} = props

    const customStyle = {
        text: {
            color:  isSelected ? '#292929' : textColor,
            padding: "0 8px"
        },
        block: {
            backgroundColor: isSelected ? '#F1EEFF' : disabled ? '#E5EDF5' : bgColor,
            borderColor: isSelected ? '#7C63F5' : disabled ? '#C3D6EC' : '#C3D6EC'
        },
        symbol: {
            color: disabled ? '#6B93C0' : '#5639E0'
        },
        amount: {
            color: isSelected ? '#5639E0' : '#59779A'
        },
        amountSymbol: {
            color: isSelected ? '#292929' : disabled ? '#A8C3E1' : '#6B93C0'
        }
    };

    return (
        <label htmlFor={id} className={`long-radio ${className}`} style={customStyle.block}>
            <div className="long-radio-left">
                <input type="radio" id={id} value={value} onChange={e => onChange(e.target.value)} checked={isSelected} disabled={disabled}/>
                <div className="long-radio-block">
                    <span style={customStyle.text}>{title}</span>
                    <p className="sec-symbol" style={customStyle.symbol}><span>~</span>12 <span>sec</span></p>
                </div>
            </div>
            <span className="amount" style={customStyle.amount}>86.60 - 119.08 <span style={customStyle.amountSymbol}>Gwei</span></span>
        </label>
    )
}

export default LongRadioBtn