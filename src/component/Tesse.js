import React from 'react';

function Tesse({image, title}) {
    return (
        <article className="tesse">
            <img src={image} alt={title} />
        </article>
    )
}
export default Tesse;