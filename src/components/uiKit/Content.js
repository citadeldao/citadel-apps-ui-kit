import React from 'react';
import '../../assets/styles/uiKit/content.scss';

const Content = (props) => {
    return (
        <section className="content" style={props.style}>
            {props.children}
        </section>
    );
};

export default Content;