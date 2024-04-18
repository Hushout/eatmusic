import React, { ReactNode, FC } from "react";
import { FaCommentAlt, FaSyncAlt } from "react-icons/fa";
import { RiEmpathizeFill } from "react-icons/ri";
import { GiAbstract053 } from "react-icons/gi";
import "./Skill.scss";
import Card from "../../Components/Card/Card";

const Skill: FC = () => {
    const skills: { title: string, content: ReactNode, img: string }[] = [
        {
            title: "Leadership",
            content: <div className="LeadershipContent">
                <p>
                    I have been a team leader during my 2 years at EPITECH, where i learn these soft skills
                </p>
                <ul>
                    <li><FaCommentAlt /><p>Communication</p></li>
                    <li><RiEmpathizeFill /><p>Empathy</p></li>
                    <li><FaSyncAlt /><p>Adaptability</p></li>
                    <li><GiAbstract053 /><p>Decision-making</p></li>
                </ul>
            </div>,
            img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Creativity",
            content: <div className="CreativityContent">
                <p>
                    I see coding as a form of art. My framework are my DAW, the tools from it is my instrument and my code is my synphonie.
                </p>
                <iframe title="MusicShowCase" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/artist/0uscMdgjH3tz2WB0GNvE4R?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>,
            img: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Competitive mindset",
            content: <div className="CompetitiveContent">
                <p>
                    I have been a competitive player in many games, and i have been a competitive programmer on codingame.com too.
                </p>
                <img alt="codingameProfile" style={{filter:'none'}} src="https://media.discordapp.net/attachments/1046429164552597536/1230523443930202243/image.png?ex=6633a143&is=66212c43&hm=de420b87f26e25b098b30a93453ea66dc369f1e6484cea27d15de08feee580ee&=&format=webp&quality=lossless"/>
            </div>,
            img: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    const skillCards = skills.map(skill => {
        return (
            <Card content={skill} />
        )
    });

    return <div className="SkillPage">
        <div className="title">Skill</div>
        <div className="skillCard">
            {skillCards}
        </div>
    </div>;
}

export default Skill;
