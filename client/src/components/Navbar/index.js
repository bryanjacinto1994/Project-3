import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import './style.css';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand cool-link" href="/">TripDaze</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li> */}

                    {/* This should only show up if the user is logged in! */}
                    <li className="nav-item ">
                        <a className="nav-link cool-link" href="#">Join Group</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li> */}


                <div className='nav-item'>
                    <Link className='cool-link nav-link' to='/profile'>Profile</Link>
                </div>
                <div className='nav-item'>
                    <a className='nav-link cool-link' href='/' onClick={API.logout}>Logout</a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;