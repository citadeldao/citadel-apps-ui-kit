import React from 'react'
import { useLocation } from 'react-router-dom'
const Panel = (props) => {
    const location = useLocation();
    const {
        className = '',
        style,
        children
    } = props
    return (
        <section className={`main-panel ${className}`} style={style} >    
            <div className='panel-header-line' style={{background: props.config.headerParamsFromConfig('TOP_BACKGROUND_COLOR') }}></div>
            {// eslint-disable-next-line
            children.length ? children.map(elem => {
                if((location.pathname === elem.props?.id) || (elem.props?.id === '/show')) return elem 
            }) : children}
        </section>
    )
}

export default Panel