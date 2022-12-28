import React, { useState } from 'react'
import '../../assets/styles/uiKit/header.css'
import Icon from './Icon';

const Header = (props) => {
    const {className = ''} = props
    const [itemColor, setItemColor] = useState('#869FFF')
   
    const setHoverColor = () => {
        setItemColor('#002BCC')
    }
    const setDefaultColor = () => {
        setItemColor('#869FFF')
    }

    return(
        <div className={`fixed-header ${className}`} ref={props.refs} style={props.style}>
            <div className={props.border ? 'header-border' : 'header'}>
                {props.title &&
                <div className='header-row'>
                    {props.back && 
                        <div className='header-back-row' onClick={props.onClick} onMouseOver={()=> setHoverColor()} onMouseLeave={() => setDefaultColor()}>
                            <Icon name='angle-left-thin' height="17" color={itemColor} opacity="0.7"/><span>{'Back'}</span>
                        </div>
                    }
                    <p>{props.title}</p>
                </div>}
            </div>
        </div>
    )
}

export default Header;