import React, { FC, ReactNode } from "react";
import './Card.scss';

interface CardProps {
    content: {
        title: string;
        content: ReactNode;
        img: string;
    }
}

const Card: FC<CardProps> = ({ content }) => {
    return (
        <div className="Card">
            <img src={content.img} alt={content.title} />
            <div className="titleCard">{content.title}</div>
            <div className="contentCard">{content.content}</div>
        </div>

    )
}

export default Card;
