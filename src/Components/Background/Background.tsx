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
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy(); 
        };
    }, []);

    return <div className='Background' ref={myRef}></div>;
};

export default Background;