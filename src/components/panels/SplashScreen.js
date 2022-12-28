import React from 'react';
import Splash from '../uiKit/Splash';

const SplashScreen = () => {
    return (
        <div>
            <Splash
                config={{
                    title: 'Cosmos Governance ',
                    description: 'Vote for ongoing proposals to enhance the Cosmos ecosystem',
                    background_color: '#170A52',
                    background: require('../../assets/img/splash/bg.svg').default,
                    circle_1: '#7C63F5',
                    circle_2: 'rgba(99, 84, 180, 0.5)',
                    circle_3: 'rgba(99, 84, 180, 0.2)',
                    circle_4: 'rgba(255, 255, 255, 0.1)',
                    textColor: '#FFFFFF',
                    mobileTextColor: '#FFFFFF',
                    iconColor: '',
                    mobileIconColor: '',
                    logo: require('../../assets/img/splash/logo.svg').default,
                    logoStyleMOB: {
                        width: '35%',
                    },
                }}
            />
        </div>
    );
};

export default SplashScreen;