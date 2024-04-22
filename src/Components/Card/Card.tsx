import React, { FC, ReactNode } from "react";
import './Card.scss';

interface CardProps {
    content: {
        title: string;
        content?: ReactNode;
        img: string;
    },
    style?: object;
}

const Card: FC<CardProps> = ({ content, style = {} }) => {
    return (
        <div className="Card" style={style}>
            <img src={content.img} alt={content.title} />
            <div className="titleCard">{content.title}</div>
            <div className="contentCard">{content.content}</div>
        </div>

    )
}

export default Card;
