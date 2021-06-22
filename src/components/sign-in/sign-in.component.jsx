import React from 'react';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

class SignIn extends React.Component {
    constructor(){
        super()
        this.state={
            email : '' ,
            password : ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email : '' ,password : ''})
    }

    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState({ [name]:value });
    }


    render(){
        return(
            <div className="sign-in">
                <h2 className='title'>I already have an acount</h2>
                <span>Sign in with your email and password</span>

                <form className='form-group' onSubmit={this.handleSubmit}>
                    <FormInput 
                        id="email" 
                        type="email" 
                        name="email"  
                        handleChange={this.handleChange} 
                        label="Email"
                        value={this.state.email} 
                        required/>
                        
                    <FormInput 
                        id="password"  
                        type="password" 
                        name="password" 
                        handleChange={this.handleChange}  
                        label="Password"
                        value={this.state.password} 
                        required/>

                    <CustomButton type="submit">Submit form</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;