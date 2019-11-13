import React from 'react';
// import { Link } from 'react-router-dom';

class Signup extends React.Component {
    state = {
        email: '',
        password: '',
        passwordConfirm: ''
    }

    handleInputChange = event => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSignup = () => {

    }

    render() {
        return (
            <div className='container mt-4 mb-5'>
                <h1 className='center'>GitTrack</h1>
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
                        <div className="row">
                            <fieldset className="form-group types col-6">
                                <legend className="col-form-label pt-0">Account Type</legend>
                                <span>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="instructor" />
                                        <label className="form-check-label" htmlFor="gridRadios2">Instructor</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="student" />
                                        <label className="form-check-label" htmlFor="gridRadios3">Student</label>
                                    </div>
                                </span>
                            </fieldset>
                        </div>

                        <div className='row col-6'>
                            <button onClick={this.handleSignup} type="submit" className="btn col-6">Submit</button>
                        </div>
                    </form>
                    {/* <Link className='col-6' to='/login'>Have an account? Login here</Link> */}

                </div>

            </div>
        )
    }
}

export default Signup;