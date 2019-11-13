import React from 'react';
import './style.css'

function Card(props) {

    return (
        <div className="card mt-5">
            <img src={props.src} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{props.name}</p>
                <p className="card-text">{props.price} {props.type}</p>
                <a className='card-text' target="_blank" rel='noopener noreferrer' href={props.url}>Link</a>
                {/* <p className="card-text">{props.name}</p> */}

            </div>
        </div>
    )
}

export default Card;   