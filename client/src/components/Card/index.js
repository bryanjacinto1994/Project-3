import React from 'react';
import './style.css'

function Card(props) {

    return (
        <div className="card">
            <img src={props.src} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{props.name}</p>
            </div>
        </div>
    )
}

export default Card;    