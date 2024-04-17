import React, { FC } from "react";
import './About.scss';
import Linka from "../../Components/Linka/Linka";

const About: FC = () => {
    return <div className="AboutPage">
        <div className="title">About</div>
        <div className="contentAbout">
            Hey, I'm CAO Anh and I use Lam as my nickname on social networks. I am a fullstack web developer with a preference for front-end. Passionate about music and art, I like to create projects and universes around what I like and I'm always curious to learn more about new technologies and creative coding.
        </div>
        <Linka href="./Resume CAO Anh.pdf">↓ Curriculum Vitae</Linka>
        <img src="https://cdn.discordapp.com/attachments/1046429164552597536/1230193659891290182/IMG_2834.jpg?ex=66326e20&is=661ff920&hm=f8e8331ae1891c6b3f5a17029b410ad9433bec13235d576a8c7129f5f61ea898&"/>
    </div>;
}

export default About;
