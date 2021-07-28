import React from 'react';
import st from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostAC, onPostChangeAC} from "../../../Redux/store";

// let addPostActionCreator = () => {
//     return {type: 'ADD_POST'}
// }
// let onPostChangeActionCreator = (text) => {
//     return {type: 'UPD_NEW_POST_TEXT', newText: text}
// }
const MyPosts = (props) => {
    //debugger
    let postEl =
        props.dataPostsJs.map(p => <Post message={p.message} name={p.name} age={p.age} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        //props.dispatch(addPostAC())
    }

    let onPostChange = () => {
        //debugger
        let text = newPostElement.current.value;
        props.updNewPostText(text);
        //let action = {type: UPD_NEW_POST_TEXT, newText: text};
        //props.dispatch(onPostChangeAC(text))
    }

    return <div>
        <div><h3>My posts Name of me</h3></div>
        <div className={st.addPost}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={st.Posts}>
            {postEl}
        </div>
    </div>

};

export default MyPosts;
