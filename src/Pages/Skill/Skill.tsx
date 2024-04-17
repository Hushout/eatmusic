import React, { FC } from "react";
import "./Skill.scss";
import Card from "../../Components/Card/Card";

const Skill: FC = () => {
    const skills: { title: string, content: string, img: string }[] = [
        {
            title: "Leadership",
            content: "I have been a team leader in a few projects and I have experience in organizing and managing a team.",
            img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Communication",
            content: "I have good communication skills and I am able to work in a team.",
            img: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Professionalism",
            content: "I am professional and I am able to work under pressure.",
            img: "https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Creativity",
            content: "I am creative and I like to think outside the box.",
            img: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    const skillCards = skills.map(skill => {
        return (
            <Card content={skill}/>
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
