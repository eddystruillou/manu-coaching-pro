import React from 'react';

function Thumbnail(thumb) {
    return (
        <div className="thumbnail">
            <>
                <img loading="lazy" src={thumb.name} alt="img"/>
            </>
            <div className="infos">
                <p>LOSS OF PERFORMANCE BUDGET DUE TO USING CSS TRANSFORMS</p>
            </div>
        </div>
    );
}

export default Thumbnail;