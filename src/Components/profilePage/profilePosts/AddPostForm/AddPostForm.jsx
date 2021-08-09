import React from 'react';
import st from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../Utils/Validaors/Validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)
const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="newPostMsg"
                    component={Textarea}
                    placeholder={'Enter your message'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddMsgReduxForm = reduxForm({form: 'addPost'})(addPostForm)

const MyPosts = (props) => {

    const onSubmit = (formData) => {
        props.addPost(formData.newPostMsg)
        formData.newPostMsg='';
    }

    let postEl =
        props.dataPostsJs.map(p => <Post key={p.id} message={p.message} name={p.name} age={p.age} likesCount={p.likesCount}/>)

    return <div>
        <div><h3>My posts Name of me</h3></div>
        <div className={st.addPost}>
            <div>
                <AddMsgReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
        <div className={st.Posts}>
            {postEl}
        </div>
    </div>

};

export default MyPosts;
