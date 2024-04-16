import React, { FC } from "react";
// import { useSpring, animated } from "react-spring";
import "./Home.scss";

const Home: FC = () => {
  return <div className="Home">
    <div className="section">
      <div className="Profile">
        <span className="customFont">HEY,I’M
          <span className="highlightedFont" style={{ color: '#B451FC' }}> CAO ANH </span>
          <br />
          BUT YOU CAN CALL ME
          <span className="highlightedFont" style={{ color: '#99fc51' }}> LAM </span></span>
      </div>
      <div className="pictureProfile">
        <img src="https://media.discordapp.net/attachments/1046429164552597536/1229781258473701507/IMG_2829.jpg?ex=6630ee0c&is=661e790c&hm=74f73869dc8c31d34349d53e8bcb8d9ae1b526fa2d188749aa6a9ecfbf4d8247&=&format=webp&width=420&height=500" alt="profile" />
      </div>
    </div>
  </div>;
}

export default Home;
