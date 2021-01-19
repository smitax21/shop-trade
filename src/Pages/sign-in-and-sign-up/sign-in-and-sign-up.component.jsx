import React from 'react';

import SignIn from '../../components/Sign-in/Sign-in.component';
import SignUp from '../../components/Sign-up/Sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp;
