import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function SplashNav(props) {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand cool-link" href="/">TripDaze</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                </ul>
                <div className='nav-item'>
                    <Link className='nav-link cool-link' to='/login'>Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default SplashNav;