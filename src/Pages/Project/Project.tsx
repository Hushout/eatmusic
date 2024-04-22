import React, { FC } from "react";
import "./Project.scss";
import Card from "../../Components/Card/Card";

const Project: FC = () => {
  const projects: { title: string, img: string }[] = [
    {
      title: "Project 1",
      img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Project 2",
      img: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Project 3",
      img: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Project 4",
      img: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Project 5",
      img: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const projectCards = projects.map(({ title, img }) => {
    return (
      <Card key={title} content={{ title, img }} style={{ transition: 'all 1.5s ease', maxHeight: '100px',minWidth:'200px',overflow:'hidden' }} />
    )
  });

  return <div className="ProjectPage">
    <div className="title">
      Project
    </div>
    <div className="projectCards">
      <div className="projectWrap">
        {projectCards}
      </div>
    </div>
  </div>;
}

export default Project;