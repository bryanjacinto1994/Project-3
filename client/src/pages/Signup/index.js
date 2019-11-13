import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import './style.css';

class Signup extends React.Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirm: ''
    }

    handleInputChange = event => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSignup = (event) => {
        event.preventDefault();

        let { email, firstName, lastName, password, passwordConfirm } = this.state
        if (email && password === passwordConfirm) {
            let creds = {
                email,
                firstName,
                lastName,
                password
            }
            API.signup(creds)
                .then(res => {
                    this.setState({
                        email: '',
                        password: '',
                        passwordConfirm: ''
                    })
                    window.location.href = '/login'
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div className='container mt-4 mb-5'>
                <h1 className='center'>Trip Daze</h1>
                <div className='container col-6 mx-auto'>
                    <h2 className='col-6'>Sign Up</h2>
                    <form>
                        <div className='row'>
                            <div className="form-group col-6">
                                <label htmlFor="firstName">First Name</label>
                                <input value={this.state.firstName} name='firstName' onChange={this.handleInputChange} type="text" className="form-control" id="firstName" placeholder="First Name" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input value={this.state.lastName} name='lastName' onChange={this.handleInputChange} type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="form-group col-12">
                                <label htmlFor="email">Email address</label>
                                <input value={this.state.email} name='email' onChange={this.handleInputChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="form-group col-6">
                                <label htmlFor="password">Password</label>
                                <input value={this.state.password} name='password' onChange={this.handleInputChange} type="password" className="form-control" id="password" placeholder="Password" autoComplete="true" />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="password">Confirm Password</label>
                                <input value={this.state.passwordConfirm} name='passwordConfirm' onChange={this.handleInputChange} type="password" className="form-control" id="passwordConfirm" placeholder="Password" autoComplete="true" />
                            </div>
                        </div>

                        <div className='row col-6'>
                            <button onClick={this.handleSignup} type="submit" className="btn col-6">Submit</button>
                        </div>
                    </form>
                    <Link className='col-6' to='/login'>Have an account? Login here</Link>

                </div>

            </div>
        )
    }
}

export default Signup;