import React, { FC, useEffect, useState } from "react";
import './WheelScroll.scss'

const WheelScroll: FC = () => {

    const [rotationAngle, setRotationAngle] = useState(0);

    const handleWheel = (event: WheelEvent) => {
      const delta = event.deltaY;
      const sensitivity:number = 0.5;
      setRotationAngle(rotationAngle + delta * sensitivity);
    };

    useEffect(() => {
      window.addEventListener("wheel", handleWheel);
      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }, [rotationAngle,handleWheel]);

    const style = {
      transform: `rotate(${rotationAngle}deg)`,
    };

    return <div className="WheelScroll" style={style}>
        <img src="/vinyl.png" alt="Vinyl"/>
    </div>;

}

export default WheelScroll;