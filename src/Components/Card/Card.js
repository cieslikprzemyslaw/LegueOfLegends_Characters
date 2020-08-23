import React from 'react';

const Card = ({ name, title }) => {
    return (
        <div>
            <p>{name}</p>
            <p>{title}</p>
        </div>
    );
};

export default Card;