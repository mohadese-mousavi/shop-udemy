import React from 'react';
import './sign-in-sign-up.style.scss';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
 
const SignInSignUpPage = (params) => (
    <div className='sign-in-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)

export default SignInSignUpPage;