import React from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserDoc} from '../../firebase/firebase.utils';
import {Redirect} from 'react-router-dom';


class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
            isSignup:false
        }
    }

    handleSubmit = async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match")
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            createUserDoc(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',
                isSignup:true
            })
        }catch(e){
            console.log(e.message);
        }

    };
    handleChange = event =>{
        const {name,value}= event.target;
        this.setState({[name]:value});
    };

    render(){
        const {displayName,email,password,confirmPassword,isSignup} = this.state;
        if (isSignup) {
            return <Redirect to="/"/>
        }
        return(
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Display name'
                        handleChange={this.handleChange}
                        required/>

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        handleChange={this.handleChange}
                        required/>

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        handleChange={this.handleChange}
                        required/>
                    
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        handleChange={this.handleChange}
                        required/>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>


            </div>
        )
    }
}

export default SignUp;