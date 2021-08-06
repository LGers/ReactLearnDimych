import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="login" component="input" placeholder={'Login'}/>
                </div>
                <div>
                    <Field name="password" component="input" placeholder={'Password'}/>
                </div>
                <div>
                    <Field name="isRememberMe" component="input" type='checkbox'/> <label>Remember me</label>
                </div>
                <div>
                    <button>Login</button>
                </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <div>
            <h1>LOGIN</h1>
            {/*<LoginReduxForm onSubmit/> // this is same \\onSubmit={onSubmit}\\===\\onSubmit\\*/}
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>

}
export default Login;