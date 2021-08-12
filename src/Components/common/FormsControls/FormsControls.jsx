import React from "react"
import st from "./FormsControls.Module.css"
import {Field} from "redux-form";
import {requiredField} from "../../../Utils/Validaors/Validators";

const FormControl = ({input, meta:{touched,error}, children,}) => {
    const hasError = touched && error;
    return (
        <div className={st.formControl + " " + (hasError ? st.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, ...restProps}=props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, ...restProps}=props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeHolder, name, validatorsObj, component, props={},text='') => (
    <div>
        <Field name={name}
               component={component}
               placeholder={placeHolder}
               validate={validatorsObj}
               {...props}
        />
        {text}
    </div>
)