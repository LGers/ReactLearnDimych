import React from "react"
import st from "./FormsControls.Module.css"

// const FormControl = ({input, meta, child, ...props}) => {
    //debugger
    // const hasError = meta.touched && meta.error;
const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={st.formControl + " " + (hasError ? st.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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


const Textarea22 = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={st.formControl + " " + (hasError ? st.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
const Input11 = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={st.formControl + " " + (hasError ? st.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

//--------------------
const MyInput = (typeOfInput, {input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    let inputString = ''
    if (typeOfInput === 'input') {
        inputString = '<input {...input} {...props}/>'
    }
    if (typeOfInput === 'textarea') {
        inputString = '<textarea {...input} {...props}/>'
    }
    return (
        <div className={st.formControl + " " + (hasError ? st.error : "")}>
            <div>
                {inputString}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )

}
//--------------------

/*import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

 */