import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../Utils/Validaors/Validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reduser";
import {Redirect} from "react-router-dom";
import st from '../common/FormsControls/FormsControls.Module.css'

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" component={Input} placeholder={'Login (e-mail)'}
                       validate={[requiredField]} //,maxLength10]}
                />
            </div>
            <div>
                <Field name="password" component={Input} placeholder={'password'}
                       validate={[requiredField]} type={'password'}
                />
            </div>
            <div>
                <Field name="isRememberMe" component={Input} type='checkbox'/> <label>Remember me</label>
            </div>
            {props.error && <div className={st.formSummaryError}>
                {props.error}
            </div>}
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
        // console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to='/profile'/>
    }
    return <div>
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>

}

const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);