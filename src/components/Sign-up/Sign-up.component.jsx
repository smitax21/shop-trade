import React from 'react';

import FormInput from '../Form-input/Form-input.component';
import CustomButton from '../Custom-button/Custom-button.component';
import { auth, createUserProfileDocument } from '../../Firebase/Firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor() {
        super();

        this.state= {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Ooops password does not match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName : '',
                email: '',
                password: '',
                confirmPassword: ''
            })


        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})

    };

    render () {
        return (
            <div className='sign-up'>
                <h1 className='title'>I do not have an account</h1>
                <span className='title'>Sign-up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        label='Display Name'
                        handleChange={this.handleChange}
                        required 
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        label='Email'
                        handleChange={this.handleChange}
                        required 
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        label='Password'
                        handleChange={this.handleChange}
                        required 
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        label='Confirm Password'
                        handleChange={this.handleChange}
                        required 
                    />

                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>
            </div>
        )
    }
    
}

export default SignUp;
