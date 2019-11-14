import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class SplashPage extends React.Component {
    state = {

    }

    render() {

        return (
            <div>
                <section className='main-title'>
                    <h1 className='title'>Trip Daze</h1>
                    <h3>Take a tour, today!</h3>
                    <Link to='/signup' className='btn'>Signup</Link> <Link to='/docs' className='btn'>About Us</Link>
                </section>
                <section className='details'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>
                                {/* What is the issue */}
                        </div>
                            <div className='col-4'>
                                Join Today!
                        </div>
                            <div className='col-4'>
                                {/* Join today! */}
                        </div>

                        </div>

                    </div>
                </section>
            </div >
        )
    }
}

export default SplashPage;