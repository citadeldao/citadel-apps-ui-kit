import React, { useEffect, useState } from 'react';
import '../../assets/styles/uiKit/splash.css';

const Splash = (props) => {
    const { config } = props;
    const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            const { innerWidth: width } = window;
            setWindowDimensions(width);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const customStyle = {
        block: {
            background: config.background_color,
            backgroundImage: windowDimensions > 600 ? `url(${config.background})` : '',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        },
        circle4: {
            backgroundColor: config.circle_4,
        },
        circle3: {
            backgroundColor: config.circle_3,
        },
        circle2: {
            backgroundColor: config.circle_2,
        },
        circle1: {
            backgroundColor: config.circle_1,
        },
        textColor: {
            color: windowDimensions > 600 ? config.textColor : config.mobileTextColor,
        },
    };

    return (
        <div className="splash-container" style={customStyle.block}>
            <div className="circle-4 animate four fadeInRight" style={customStyle.circle4}></div>
            <div className="circle-3 animate three fadeInRight" style={customStyle.circle3}></div>
            <div className="circle-2 animate two fadeInRight" style={customStyle.circle2}></div>
            <div className="circle-1 animate one fadeInRight" style={customStyle.circle1}></div>
            <div className="splash-content" style={customStyle.textColor}>
                <h1>{config.title}</h1>
                <p>{config.description}</p>
            </div>
            <div style={windowDimensions < 600 ? config.logoStyleMOB : config.logoStyleWEB} className="custom-icon">
                <img src={config.logo} alt="logo"/>
            </div>
        </div>
    );
};

export default Splash;