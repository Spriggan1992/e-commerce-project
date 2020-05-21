import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CostomButton from '../costom-button/costom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
// import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.createUserWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" })
        } catch (error) {
            console.log(error);

        }

        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CostomButton type='submit'> Sign in </CostomButton>
                        <CostomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
                            Sign in with Google
            </CostomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;