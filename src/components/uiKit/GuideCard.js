import React, { useState } from "react";
import Icon from './Icon';
import { ReactComponent as Bg } from '../../assets/img/card-bg.svg';
import { ReactComponent as BgHover } from '../../assets/img/card-bg-gradient.svg';

import '../../assets/styles/uiKit/guideCard.scss';

const GuideCard = (props) => {
    const {
        title, 
        background, 
        textColor, 
        info, 
        arrowColor, 
        data, 
        className = ''
    } = props
    
    const [iconHoverColor, setIconHoverColor] = useState(arrowColor || '#fff')
    const [bckgHoverColor, setBckgHoverColor] = useState(background)
    const [iconOpacity, setIconOpacity] = useState('0.2')

    const customStyle = {
        ...props.style,
        block: {
            background:  bckgHoverColor
        },
        text: {
            color: textColor,
            fontSize: info ? '20px' : '16px',
            textTransform: info ? 'none' : 'uppercase'
        },
        arrow: {
            top: info ? '50%' : '40%'
        }
    };

    const setHoverColor = () => {
        setIconHoverColor('#FFFFFF')
        info ? setBckgHoverColor('linear-gradient(90deg, rgba(212, 252, 121, 0.5) 0%, rgba(150, 230, 161, 0.5) 100%)') : setBckgHoverColor('linear-gradient(90deg, #E8D0FF 0%, #A5D2FF 100%)')
        setIconOpacity('0.5')
    }

    const setDefaultColor = () => {
        setIconHoverColor(arrowColor)
        setBckgHoverColor(background)
        setIconOpacity('0.2')
    }

    return (
        <div className={`guide-card-block ${className}`} style={customStyle.block} onMouseOver={()=> setHoverColor()} onMouseLeave={() => setDefaultColor()} >
            <div>
                <p style={customStyle.text} className="guide-card-title">{title}</p>
               {info && 
               <div className="guide-card-container">
                   <div className="guide-card-content">
                       <p className="guide-card-content-txt">{data?.bondedTxt}</p>
                       <p className="guide-card-amount-txt">{data?.bondedAmount}<span>$</span></p>
                    </div>
                    <div className="guide-card-content second-block">
                       <p className="guide-card-content-txt">{data?.availableTxt}</p>
                       <p className="guide-card-amount-txt">{data?.availableAmount}<span>$</span></p>
                    </div>
               </div> 
               }
            </div>
            <div className="guide-card-right">
                {info
                    ? <Bg opacity={iconOpacity} width="126" height="117"/>
                    : <BgHover opacity={iconOpacity} width="90" height="65"/>
                }
                {/*<Icon name={info ? 'guide-green-icon' : 'guide-icon'} opacity={iconOpacity} />*/}
                <div className="guide-card-arrow" style={customStyle.arrow}>
                    <Icon name="arrow-turn-down-right" width={info ? 33 : 21}  color={iconHoverColor}/>
                </div>
            </div>
        </div>
    )
}

export default GuideCard