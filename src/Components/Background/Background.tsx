import React, { useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import './Background.scss';

const Background = () => {
    const myRef = useRef(null);

    useEffect(() => {
        const vantaEffect = BIRDS({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            separation: 80.00,
            speedLimit: 4.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x36367a
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return <div className='Background' ref={myRef}></div>;
};

export default Background;