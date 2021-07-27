import React from 'react';
import st from './ProfileMyPosts.module.css';
import MyPosts from "./Post/MyPosts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../Redux/state";

// let addPostActionCreator = () => {
//     return {type: 'ADD_POST'}
// }
// let onPostChangeActionCreator = (text) => {
//     return {type: 'UPD_NEW_POST_TEXT', newText: text}
// }
const ProfileMyPosts = (props) => {
    let postEl =
        props.dataPostsJs.map(p => <MyPosts message={p.message} name={p.name} age={p.age} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updNewPostText(text);
        //let action = {type: UPD_NEW_POST_TEXT, newText: text};
        props.dispatch(onPostChangeActionCreator(text))
    }
    return <div>
        <div><h3>My posts Name of me</h3></div>
        <div className={st.addPost}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={st.Posts}>
            {postEl}
        </div>
    </div>

};

export default ProfileMyPosts;
