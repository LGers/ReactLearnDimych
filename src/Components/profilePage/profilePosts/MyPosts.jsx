import React from 'react';
import st from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postEl =
        props.dataPostsJs.map(p => <Post message={p.message} name={p.name} age={p.age} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updNewPostText(text);
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
