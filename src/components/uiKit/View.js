import React from 'react'
import '../../assets/styles/panels/index.css'
import '../../assets/styles/index.css'
const View = (props) => {
    return (
        <section id='main-view' style={props.style}>
            {props.children}
        </section>
    )
}

export default View