import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import './style.css';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleLogin = (event) => {
        event.preventDefault();
        let { email, password } = this.state
        if (email && password) {
            console.log("Logging In")
            let creds = {
                email,
                password
            }
            API.login(creds)
                .then(res => {
                    console.log(res);
                    this.setState({
                        email: '',
                        password: ''
                    })
                    window.location.href = '/'
                })
        }
    }

    render() {
        return (
            <div>
                <div className='container col-m-6' style={{ marginTop: '3rem' }}>
                    <h1 className="display-4 center">Trip Daze</h1>

                    <div className='container col-6 mx-auto mt-5'>

                        <h3 className='col-6'>Login</h3>
                        <form>
                            <div className="form-group col-12">
                                <label htmlFor="email">Email address</label>
                                <input value={this.state.email} name='email' onChange={this.handleInputChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="password">Password</label>
                                <input value={this.state.password} name='password' onChange={this.handleInputChange} type="password" className="form-control" id="password" placeholder="Password" autoComplete="true" />
                            </div>
                            {/* <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                    </div> */}
                            {/* {this.state.message ?
                                <Message
                                    message={this.state.message}
                                    color={this.state.color}
                                />
                                : ''
                            } */}

                            <div className='col-6'>
                                <button onClick={this.handleLogin} type="submit" className="btn">Submit</button> <span><Link className='btn' to='/'>Return Home</Link></span>
                            </div>


                        </form>
                        <Link className='col-6 link' to='/signup'>Don't have an account? Signup here.</Link>
                    </div>
                    {/* {/* <h5 className='mt-3'>Login with...</h5> */}
                    {/* <button type='button' className='mt-3 btn'>Github</button> */}
                    {/* In the future, I want to add a forgot username or password link */}
                </div>
            </div>
        )
    }
}

export default Login