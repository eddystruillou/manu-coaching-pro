import React from 'react';

function Thumbnail(thumb) {
    return (
        <div className="thumbnail">
            <img loading="lazy" src={thumb.name} alt="img"/>
            <div className="card-text-block">
                <div className="card-header">Death Card</div>
                <div className="card-text">A woman visits a magic shop where a mysterious tarot reader foretells a chilling prophecy.</div>
                <div className="card-gradient"></div>
            </div>
        </div>
    );
}

export default Thumbnail;