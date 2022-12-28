import React from 'react'
import '../../assets/styles/uiKit/popupWindow.css'
const PopupWindow = (props) => {
    const {className = ''} = props
    return (
        <div className={props.show ? "active-popup" : `popup-window ${className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default PopupWindow