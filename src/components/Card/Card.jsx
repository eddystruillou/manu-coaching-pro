import React from 'react';
import './Card.scss';

function Card(card) {
    return (
        <div className="card-container">
            <img loading="lazy" src={card.name} alt="img"/>
            <div className="card-text-block">
                <div className="card-header">Death Card</div>
                <div className="card-text">A woman visits a magic shop where a mysterious tarot reader foretells a chilling prophecy.</div>
            </div>
            <div className="card-gradient"></div>
        </div>
    );
}

export default Card;