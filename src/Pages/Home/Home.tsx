import React, { FC } from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.scss";
import Linka from "../../Components/Linka/Linka";

const Home: FC = () => {
  const navigate = useNavigate();
  return <div className="Home">
    <div className="section">
      <div className="Profile">
        <span className="customFont">HEY,I’M
          <span className="highlightedFont" style={{ color: '#B451FC' }}> CAO ANH </span>
          <br />
          BUT YOU CAN CALL ME
          <span className="highlightedFont" style={{ color: '#99fc51' }}> LAM </span></span>
        <br />
        💻 I'm a fullstack Developer, I love to code and create new things on ReactJs and NodeJs.
        <br />
        If you want to know more about me, you can check my projects or contact me 😊.
        <div className="Linkas">
          <Linka onClick={() => {
            navigate('/project');
          }}>→ Check my projects</Linka>
          <Linka onClick={() => {
            navigate('/contact');
          }}>→ Contact me</Linka>
        </div>
      </div>
      <div className="pictureProfile">
        <img src="https://media.discordapp.net/attachments/1046429164552597536/1229781258473701507/IMG_2829.jpg?ex=6630ee0c&is=661e790c&hm=74f73869dc8c31d34349d53e8bcb8d9ae1b526fa2d188749aa6a9ecfbf4d8247&=&format=webp&width=420&height=500" alt="profile" />
      </div>
    </div>
  </div>;
}

export default Home;
