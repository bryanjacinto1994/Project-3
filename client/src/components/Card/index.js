import React from 'react';
import './style.css'

function Card(props) {
    if (props.type === 'save') {
        return (
            <div className="card mt-5">
                <img src={props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{props.name}</p>
                    <p className="card-text">{props.price} {props.currency}</p>
                    <a className='card-text' target="_blank" rel='noopener noreferrer' href={props.url}>Link</a>
                    <button className='btn' onClick={() => props.saveTour(props.name, props.price, props.currency, props.url, props.src)}>Save</button>
                </div>
            </div >
        )
    } else if (props.type === 'delete') {
        return (
            <div className="card mt-5">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{props.name}</p>
                    <p className="card-text">{props.price} {props.currency}</p>
                    <a className='card-text' target="_blank" rel='noopener noreferrer' href={props.url}>Link</a>
                    <button className='btn' onClick={() => props.deleteTour(props.id)}>Delete</button>
                </div>
            </div >
        )
    } else {
        console.log(":(")
    }

}

export default Card;    