import React from "react";

interface CardProps {
    title: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({title, children}) => {
    return (
        <div className="p-4 rounded-lg shadow-md mb-4" style={{backgroundColor: 'rgb(20,20,20)'}}>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <div className="">{children}</div>
        </div>
    );
};

export default Card;