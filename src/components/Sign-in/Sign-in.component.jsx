import React from 'react';

import FormInput from '../Form-input/Form-input.component';
import CustomButton from '../Custom-button/Custom-button.component';
import { signInWithGoogle } from '../../Firebase/Firebase.utils';

import './Sign-in.styles.scss';

class SignIn extends React.Component{
    constructor() {
        super();

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email:'', password:'' })
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]:value})
    }


    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email'
                     value={this.state.email} 
                     label='email'
                     handleChange={this.handleChange} 
                     required />
                    

                    <FormInput type='password' 
                     name='password' 
                     value={this.state.password}
                     label='password'
                     handleChange={this.handleChange} 
                     required />
                    
                    <div className='btn'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > 
                            {' '}Sign In with Google{' '} 
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;
